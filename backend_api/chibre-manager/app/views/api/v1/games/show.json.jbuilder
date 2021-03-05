json.extract! @game, :id, :name, :status, :created_at
json.teams @game.teams do |team|
  json.extract! team, :id, :name, :points

  json.player team.players do |player|
    json.extract! player, :id, :name, :first_to_play, :distributor
  end
end
