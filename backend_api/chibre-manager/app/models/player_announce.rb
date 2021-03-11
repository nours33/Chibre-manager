class PlayerAnnounce < ApplicationRecord

  # Le Player Annonce ne peut qu'appartenir qu'à un seul joueur et annonce
  belongs_to :player
  belongs_to :announce

end
