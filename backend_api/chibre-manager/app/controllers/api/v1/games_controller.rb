class Api::V1::GamesController < Api::V1::BaseController

  before_action :set_game, only: [:show]

  def index
    @games = Game.all
  end


  def create
    @game = Game.new()

    @team1 = Team.new(name: params[:team_name1], points: 0, game: @game)
    @team2 = Team.new(name: params[:team_name2], points: 0, game: @game)

    @player1 = Player.new(name: params[:player1], team: @team1)
    @player2 = Player.new(name: params[:player2], team: @team1)
    @player3 = Player.new(name: params[:player3], team: @team2)
    @player4 = Player.new(name: params[:player4], team: @team2)

    if params[:first_to_play] == "first"
      @player1.update(first_to_play: true)
      @player2.update(first_to_play: false)
      @player3.update(first_to_play: false)
      @player4.update(first_to_play: false)
    elsif params[:first_to_play] == "second"
      @player1.update(first_to_play: false)
      @player2.update(first_to_play: true)
      @player3.update(first_to_play: false)
      @player4.update(first_to_play: false)
    elsif params[:first_to_play] == "third"
      @player1.update(first_to_play: false)
      @player2.update(first_to_play: false)
      @player3.update(first_to_play: true)
      @player4.update(first_to_play: false)
    else
      @player1.update(first_to_play: false)
      @player2.update(first_to_play: false)
      @player3.update(first_to_play: false)
      @player4.update(first_to_play: true)
    end

    if @team1.save && @team2.save && @player1.save && @player2.save && @player3.save && @player4.save
      @game.update(name: "Partie " + @game.id.to_s, status: 'game_in_progress')
      render json: { success: true, game: @game}
    else
      render json: { success: false, game: @game}
    end
  end

  def show

  end

  def set_game
    @game = Game.find(params[:id])
  end

  def game_params
    params.permit(
        :name,
        :status,
        :atout
    )
  end

end
