json.array! @players do |player|
  json.extract! player, :id
end
