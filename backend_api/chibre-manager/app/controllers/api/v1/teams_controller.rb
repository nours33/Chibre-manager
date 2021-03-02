class Api::V1::TeamsController < Api::V1::BaseController
  def index
    @teams = Team.all
  end

  def create
    @team = Team.new()
    @last_game = Game.last
    if @team.save
      @team.update(name: "Team " + @team.id.to_s, points: 0, game_id: @last_game.id)
      render json: { success: true, game: @team}
    else
      render json: { success: false, game: @team}
    end
  end
end
