class Game < ApplicationRecord

   # Permet de pouvoir donner l'un dès deux nom pour la value "status"
  enum status: [:game_over, :game_in_progress]

  # Une Game peut avoir plusieurs teams.
  has_many :teams, dependent: :destroy

end
