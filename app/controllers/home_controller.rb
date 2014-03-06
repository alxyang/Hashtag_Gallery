class HomeController < ApplicationController
  require 'json'
  def index
        #@instagram = Instagram.user_recent_media("21528029", {:count  => 3})
        #@instagram = Instagram.tag_recent_media("geisel", {:count => 50})
        #@instagram = Instagram.tag_recent_media("geisel", {:count => 50, :max_id => 13872296})
        #@instagram_user = Instagram.tag_recent_media("geisel", {:count => 50, :max_id => 13872296})
        result = []
        next_id = nil
        while result.length < 200
            data = Instagram.tag_recent_media("geisel", max_id: next_id)
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
end
