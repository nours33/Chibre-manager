class Player < ApplicationRecord
  validates_presence_of :name

  belongs_to :team

  has_many :player_announces, dependent: :destroy
  has_many :announces, through: :player_announces, dependent: :destroy
end
