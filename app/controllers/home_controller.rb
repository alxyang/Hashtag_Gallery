class HomeController < ApplicationController
  require 'json'
  def index
        result = []
        next_id = nil
        while result.length < 200
            data = Instagram.tag_recent_media("geisel", max_id: next_id, count: 50)
            next_id = data.pagination.next_max_id
            result.concat(data)
        end
        #result.each do |instagram_pic|
        #    data = JSON.parse(instagram_pic.to_json)
        #end

        @results = result.paginate(:page => params[:page], :per_page => 40)
          if request.xhr?
            render '_photos'
          end
        #new_max_id = @instagram.pagination.next_max_id
        #@nextpage = Instagram.tag_recent_media("geisel", :max_id => new_max_id ) unless new_max_id.nil?
  end

  def about
  end
end
