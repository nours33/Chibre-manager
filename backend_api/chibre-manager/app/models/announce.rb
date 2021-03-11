class Announce < ApplicationRecord

  # Une annonce peut avoir plusieurs joueurs à travers la table "player_announces"
  has_many :player_announces, dependent: :destroy
  has_many :players, through: :player_announces, dependent: :destroy

end
