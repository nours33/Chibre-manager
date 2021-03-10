class Api::V1::PlayersController < Api::V1::BaseController
  # Permet de lister tous les joueur dans la valeur @players
  def index
    @players = Player.all
  end
end
