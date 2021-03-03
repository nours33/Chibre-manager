class Api::V1::PlayersController < Api::V1::BaseController
  def index
    @players = Player.all
  end

end
