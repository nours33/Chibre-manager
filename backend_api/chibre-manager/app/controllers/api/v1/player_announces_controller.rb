class Api::V1::PlayerAnnouncesController < Api::V1::BaseController
  def index
    @player_announces = PlayerAnnounces.all
  end
end
