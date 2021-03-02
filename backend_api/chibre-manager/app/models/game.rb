class Game < ApplicationRecord
  enum status: [:game_over, :game_in_progress]
end
