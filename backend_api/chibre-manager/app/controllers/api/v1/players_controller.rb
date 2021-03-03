class Api::V1::PlayersController < Api::V1::BaseController
  def index
    @players = Player.all
  end

  def create
    @player = Player.new(player_params)
    @team = Team.new(team_params)
    if @player.save && @team.save

    end
  end

  def player_params
    params.permit(
        :name,
        :first_to_play,
        :distributor,
        )
  end

  def team_params
    params.permit(
        :name,
        )
  end
end
