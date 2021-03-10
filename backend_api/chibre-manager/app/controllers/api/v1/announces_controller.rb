class Api::V1::AnnouncesController < Api::V1::BaseController

  # Permet de faire la methode set_announce avant d'utiliser destroy
  before_action :set_announce, only: [:destroy]

  # Permet de retourner une liste d'annonces
  def index
    @announces = Announce.all
  end

  # Permet de supprimer une annonce
  def destroy
    if @announce.destroy
      render json: {success: true, player_announce: @player_announce}
    end
  end

  # Trouve une announce selon une id
  def set_announce
    @announce = Announce.find(params[:id])
  end

end
