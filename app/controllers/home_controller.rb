class HomeController < ApplicationController
  def index
        #@instagram = Instagram.user_recent_media("21528029", {:count  => 3})
        #@instagram = Instagram.tag_recent_media("geisel", {:count => 50})
        #@instagram = Instagram.tag_recent_media("geisel", {:count => 50, :max_id => 13872296})
        #@instagram_user = Instagram.tag_recent_media("geisel", {:count => 50, :max_id => 13872296})
        @instagram = Instagram.tag_recent_media("geisel")
        new_max_id = @instagram.pagination.next_max_id
        @nextpage = Instagram.tag_recent_media("geisel", :max_id => new_max_id ) unless new_max_id.nil?
  end
end
