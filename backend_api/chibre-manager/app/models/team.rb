class Team < ApplicationRecord

  validates_presence_of :name

  belongs_to :game
  has_many :players
end
