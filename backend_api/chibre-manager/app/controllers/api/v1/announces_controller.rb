class Api::V1::AnnouncesController < Api::V1::BaseController
  def index
    @announces = Announce.all
  end
end
