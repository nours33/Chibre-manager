class Api::V1::GamesController < Api::V1::BaseController

  # Utilise la méthode "set game" avant d'utiliser les méthodes "show" et update,
  # Permets de trouver la bonne partie selon une id
  before_action :set_game, only: [:show, :update]

  # Liste toutes les parties dans la variable @game
  def index
    @games = Game.all
  end

  # Crée une partie avec les paramètres des deux équipes et des quatre joueurs
  def create

    # Crée une partie
    puts(params)
    @game = Game.new()

    # Crée les deux équipes
    @team1 = Team.new(name: params[:team_name1], points: 0, game: @game)
    @team2 = Team.new(name: params[:team_name2], points: 0, game: @game)

    # Crée les quatres joueurs
    @player1 = Player.new(name: params[:player1], team: @team1)
    @player2 = Player.new(name: params[:player2], team: @team1)
    @player3 = Player.new(name: params[:player3], team: @team2)
    @player4 = Player.new(name: params[:player4], team: @team2)

    # Attribue la valeur de "true" à la premier personne qui commence à jouer
    if params[:first_to_play] == "first"
      @player1.update(first_to_play: true)
      @player1.update(position: "premier")

      @player2.update(first_to_play: false)
      @player2.update(position: "troisieme")

      @player3.update(first_to_play: false)
      @player3.update(position: "deuxieme")

      @player4.update(first_to_play: false)
      @player4.update(position: "quatrieme")
    elsif params[:first_to_play] == "second"
      @player1.update(first_to_play: false)
      @player1.update(position: "troisieme")

      @player2.update(first_to_play: true)
      @player2.update(position: "premier")

      @player3.update(first_to_play: false)
      @player3.update(position: "quatrieme")

      @player4.update(first_to_play: false)
      @player4.update(position: "deuxieme")
    elsif params[:first_to_play] == "third"
      @player1.update(first_to_play: false)
      @player1.update(position: "deuxieme")

      @player2.update(first_to_play: false)
      @player2.update(position: "quatrieme")

      @player3.update(first_to_play: true)
      @player3.update(position: "premier")

      @player4.update(first_to_play: false)
      @player4.update(position: "troisieme")
    else
      @player1.update(first_to_play: false)
      @player1.update(position: "quatrieme")

      @player2.update(first_to_play: false)
      @player2.update(position: "deuxieme")

      @player3.update(first_to_play: false)
      @player3.update(position: "troisieme")

      @player4.update(first_to_play: true)
      @player4.update(position: "premier")

    end

    # Vérifie si toutes les valeurs attendues sont là puis créé tous les informations (Game, Team, Player) pour la partie
    if @team1.save && @team2.save && @player1.save && @player2.save && @player3.save && @player4.save
      @game.update(name: "Partie " + @game.id.to_s, status: 'game_in_progress')
      render json: { success: true, game: @game}
    else
      render json: { success: false, game: @game}
    end
  end

  # Met tout les informations dans la variable "@game". Regardez before_action
  def show

  end

  # Met à jour une partie
  def update
    team1_total_point_announce = params[:team1_num0_announce].to_i + params[:team1_num01_announce].to_i + params[:team1_num2_announce].to_i + params[:team1_num3_announce].to_i + params[:team1_num4_announce].to_i
    team2_total_point_announce = params[:team2_num0_announce].to_i + params[:team2_num01_announce].to_i + params[:team2_num2_announce].to_i + params[:team2_num3_announce].to_i + params[:team2_num4_announce].to_i

    @game.teams.first.update(points: params[:points_manche].to_i + @game.teams.first.points.to_i + team1_total_point_announce )
    @game.update(rounds: @game.rounds + 1)

    if params[:points_manche].to_i == 0
      if params[:match] == "oui"
        @game.teams.last.update(points: 257 +  @game.teams.last.points.to_i + team2_total_point_announce)
      else
        @game.teams.last.update(points: 157 +  @game.teams.last.points.to_i + team2_total_point_announce)
      end
    elsif 157 - params[:points_manche].to_i <= 0
      @game.teams.last.update(points: 0 + @game.teams.last.points.to_i + team2_total_point_announce)
    else
      @game.teams.last.update(points: 157 - params[:points_manche].to_i + @game.teams.last.points.to_i + team2_total_point_announce)
    end

    if @game.save
      render json: { success: true, teams: @game.teams}
    end
  end

  # Trouve une partie selon une id
  def set_game
    @game = Game.find(params[:id])
  end

  # Vérifie si ces paramètres sont présents lors de la création d'une partie
  def game_params
    params.permit(
        :name,
        :status,
        :atout
    )
  end

end
