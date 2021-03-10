class Api::V1::AnnouncesController < Api::V1::BaseController
  before_action :set_announce, only: [:destroy]

  def index
    @announces = Announce.all
  end


  def destroy
    if @announce.destroy
      render json: { success: true, game: @player_announce}
    end
  end


  # Trouve une announce selon une id
  def set_announce
    @announce = Announce.find(params[:id])
  end

end
