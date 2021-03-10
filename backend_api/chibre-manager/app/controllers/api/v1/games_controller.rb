class Api::V1::GamesController < Api::V1::BaseController

  # Utilise la méthode "set game" avant d'utiliser les méthodes "show" et update,
  # Permets de trouver la bonne partie selon une id
  before_action :set_game, only: [:show, :update, :destroy]

  # Liste toutes les parties dans la variable @game
  def index
    @games = Game.all
  end

  # Crée une partie avec les paramètres des deux équipes et des quatre joueurs
  def create

    # Crée une partie
    @game = Game.new(points: params[:game_points])

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
      @player1.update(position: 1)
      @player1.update(distributor: false)

      @player2.update(first_to_play: false)
      @player2.update(position: 3)
      @player2.update(distributor: false)

      @player3.update(first_to_play: false)
      @player3.update(position: 2)
      @player3.update(distributor: false)

      @player4.update(first_to_play: false)
      @player4.update(position: 4)
      @player4.update(distributor: true)
    elsif params[:first_to_play] == "second"
      @player1.update(first_to_play: false)
      @player1.update(position: 3)
      @player1.update(distributor: false)

      @player2.update(first_to_play: true)
      @player2.update(position: 1)
      @player2.update(distributor: false)

      @player3.update(first_to_play: false)
      @player3.update(position: 4)
      @player3.update(distributor: true)

      @player4.update(first_to_play: false)
      @player4.update(position: 2)
      @player4.update(distributor: false)
    elsif params[:first_to_play] == "third"
      @player1.update(first_to_play: false)
      @player1.update(position: 2)
      @player1.update(distributor: false)

      @player2.update(first_to_play: false)
      @player2.update(position: 4)
      @player2.update(distributor: true)

      @player3.update(first_to_play: true)
      @player3.update(position: 1)
      @player3.update(distributor: false)

      @player4.update(first_to_play: false)
      @player4.update(position: 3)
      @player4.update(distributor: false)
    else
      @player1.update(first_to_play: false)
      @player1.update(position: 4)
      @player1.update(distributor: true)

      @player2.update(first_to_play: false)
      @player2.update(position: 2)
      @player2.update(distributor: false)

      @player3.update(first_to_play: false)
      @player3.update(position: 3)
      @player3.update(distributor: false)

      @player4.update(first_to_play: true)
      @player4.update(position: 1)
      @player4.update(distributor: false)
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


  # Met a jour une partie
  def update

    # Vérifie si il y a les points des matches dans les params
    if (params[:points_manche])

      # Additionne tous les points des annonces
      team1_total_point_announce = params[:team1_num0_announce].to_i + params[:team1_num01_announce].to_i + params[:team1_num2_announce].to_i + params[:team1_num3_announce].to_i + params[:team1_num4_announce].to_i
      team2_total_point_announce = params[:team2_num0_announce].to_i + params[:team2_num01_announce].to_i + params[:team2_num2_announce].to_i + params[:team2_num3_announce].to_i + params[:team2_num4_announce].to_i

      # Met a jour la manche de la partie
      @game.update(rounds: @game.rounds + 1)

      # Permet de définir le nouveau distributeur
      @game.teams.each do |team|
        team.players.each do |player|
          if (player.distributor)
            @distributor_position = player.position
            player.update(distributor: false)
          end
        end
      end
      @new_distributor_position = @distributor_position + 1
      if (@new_distributor_position == 5)
        @new_distributor_position = 1
      end
      @game.teams.each do |team|
        team.players.each do |player|
          if (player.position == @new_distributor_position)
            player.update(distributor: true)
          end
        end
      end

      # Permet de définir le joueur qui devra chosir l'atout
      @game.teams.each do |team|
        team.players.each do |player|
          if (player.first_to_play)
            @first_to_play_position = player.position
            player.update(first_to_play: false)
          end
        end
      end
      @new_first_to_play_position = @first_to_play_position + 1
      if (@new_first_to_play_position == 5)
        @new_first_to_play_position = 1
      end
      @game.teams.each do |team|
        team.players.each do |player|
          if (player.position == @new_first_to_play_position)
            player.update(first_to_play: true)
          end
        end
      end

      # Verifie si les points de la manche sont a 0 et met a jour les points de l'équipe 2
      if params[:points_manche].to_i == 0
        # Vérifie si il y a un match; Si oui on ajoute 257 points sinon 157
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

      # Met a jour les points de l'équipe 2
      @game.teams.first.update(points: params[:points_manche].to_i + @game.teams.first.points.to_i + team1_total_point_announce )

      # Vérifie si il y a un gagnant dans la partie
      if (@game.teams.first.points >= @game.points)
        @game.teams.first.update(winner: true)
        @game.update(winner: true)
      elsif (@game.teams.last.points >= @game.points)
        @game.teams.last.update(winner:true)
        @game.update(winner: true)
      end

      # Sauvegarde une partie
      if @game.save
        render json: { success: true, teams: @game.teams, game: @game}
      end

    # Met a jour l'atout et affichige l'icone sur le bon joueur (atout)
    elsif (params[:atout] != '')
      @game.update(atout: params[:atout])
      if (params[:chibre] == "true")
        @game.teams.each do |team|
          team.players.each do |player|
            if (player.first_to_play)
              @first_to_play_position = player.position
              player.update(first_to_play: false)
            end
          end
        end
        @new_first_to_play_position = @first_to_play_position + 2
        if (@new_first_to_play_position == 5)
          @new_first_to_play_position = 1
        end
        if (@new_first_to_play_position == 6)
          @new_first_to_play_position = 2
        end
        @game.teams.each do |team|
          team.players.each do |player|
            if (player.position == @new_first_to_play_position)
              player.update(first_to_play: true)
              render json: { success: true, teams: @game.teams}
            end
          end
        end
      else
        render json: { success: true, teams: @game.teams}
      end

    # Verifie le status de la partie
    elsif (params[:status] != '')
      @game.update(status: params[:status])
    end

  end

  # Permet de supprimer une partie
  def destroy
    if @game.destroy
      render json: { success: true, game: @game}
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
