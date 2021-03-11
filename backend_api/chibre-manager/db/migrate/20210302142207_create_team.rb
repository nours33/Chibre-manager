class CreateTeam < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :points, default: 0
      t.boolean :winner, default: false

      t.timestamps
    end
    add_reference :teams, :game, foreign_key: true
  end
end
