class Api::V1::GamesController < Api::V1::BaseController
  def index
    @games = Game.all
  end


  def create
    @game = Game.new()
    if @game.save
      @game.update(name: "Partie " + @game.id.to_s, status: 'game_in_progress')
      render json: { success: true, game: @game}
    else
      render json: { success: false, game: @game}
    end
  end

  def game_params
    params.permit(
        :name,
        :status,
        :atout
    )
  end

end
