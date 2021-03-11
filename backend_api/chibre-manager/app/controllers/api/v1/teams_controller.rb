class Api::V1::TeamsController < Api::V1::BaseController
  # Permet de lister tous les équipe dans la valeur @teams
  def index
    @teams = Team.all
  end

  # Crée une équipe
  def create
    # Crée une partie
    @last_game = Game.last

    # Crée les deux équipes
    @team = Team.new(name: params[:teamname])
    @team.update(game_id: @last_game.id)

    #Crée les quatres joueurs
    @player1 = Player.new(name: params[:player1])
    @player1.update(team_id: @team.id)
    @player2 = Player.new(name: params[:player2])
    @player2.update(team_id: @team.id)

    if @team.save && @player1.save && @player2.save
      @team.update(game_id: @last_game.id)
      @player1.update(team_id: @team.id)
      @player2.update(team_id: @team.id)
      render json: { success: true, team: @team, player1: @player1, player2: @player2}
    else
      render json: { success: false, team: @team, player1: @player1, player2: @player2}
    end
  end

  def team_params
    params.permit(
        :name,
        )
  end

  def player_params
    params.permit(
        :name,
        )
  end

end
