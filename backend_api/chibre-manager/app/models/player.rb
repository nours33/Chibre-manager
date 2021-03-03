class Player < ApplicationRecord
  validates_presence_of :name

  belongs_to :team
end
