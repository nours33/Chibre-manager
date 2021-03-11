class Team < ApplicationRecord

  # Attends la valeur "name" pour pouvoir crée une équipe
  validates_presence_of :name

  # Une équipe ne peut qu'appartenir à une seule partie
  belongs_to :game

  # Une équipe peut avoir plusieurs joueurs
  has_many :players, dependent: :destroy

end
