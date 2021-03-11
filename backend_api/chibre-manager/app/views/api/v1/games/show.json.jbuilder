json.extract! @game, :id, :name, :status, :rounds, :atout, :points, :winner
json.teams @game.teams do |team|
  json.extract! team, :id, :name, :points, :winner

  json.player team.players do |player|
    json.extract! player, :id, :name, :first_to_play, :distributor

    json.announce player.announces do |announce|
      json.extract! announce, :id, :name, :points, :rounds
    end
  end
end
