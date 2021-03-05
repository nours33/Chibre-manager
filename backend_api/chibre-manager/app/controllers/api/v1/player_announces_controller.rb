class Api::V1::PlayerAnnouncesController < Api::V1::BaseController
  def index
    @player_announces = PlayerAnnounces.all
  end

  def create
    @announce = Announce.new(name: params[:name], points: params[:points], rounds: params[:rounds])
    @player_announce = PlayerAnnounce.new(player_id: params[:playerid])


    puts("************************")
    puts(params)
    puts("************************")

     if @announce.save
       @player_announce.update(announce_id: @announce.id)
       @player_announce.save
        render json: { success: true, game: @game}
      end


  end


end
