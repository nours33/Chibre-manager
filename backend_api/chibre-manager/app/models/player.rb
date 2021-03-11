class Player < ApplicationRecord

  # Attends la valeur "name" pour pouvoir crée un joueur
  validates_presence_of :name

  # Le joueur ne peut qu'appartenir à une seule équipe (team)
  belongs_to :team

  # Le joueur peut avoir plusieurs annonces à travers la table "player_announces"
  has_many :player_announces, dependent: :destroy
  has_many :announces, through: :player_announces, dependent: :destroy

end
