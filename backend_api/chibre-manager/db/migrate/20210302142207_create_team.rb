class CreateTeam < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :points
    end
    add_reference :teams, :game, foreign_key: true
  end
end
