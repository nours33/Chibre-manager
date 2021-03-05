class Announce < ApplicationRecord
  has_many :player_announces, dependent: :destroy
  has_many :players, through: :player_announces, dependent: :destroy

end
