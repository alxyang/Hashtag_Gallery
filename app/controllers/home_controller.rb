class HomeController < ApplicationController
  require 'json'
  def index
        result = []
        next_id = nil
        pages = 0;
        while pages < 5
            data = Instagram.tag_recent_media("geisel", max_id: next_id)
            next_id = data.pagination.next_max_id
            result.concat(data)
            pages += 1
        end

        @results = result.paginate(:page => params[:page], :per_page => 30)

          if request.xhr?
            render '_photos'
          end
  end

  def about
  end
end
