json.array! @games do |game|
  json.extract! game, :id, :name, :status, :rounds, :created_at

  json.teams game.teams do |team|
    json.extract! team, :id, :name, :points

    json.player team.players do |player|
      json.extract! player, :id, :name
    end
  end
end
