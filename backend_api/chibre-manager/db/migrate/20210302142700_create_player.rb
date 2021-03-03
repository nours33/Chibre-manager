class CreatePlayer < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :first_to_play
      t.integer :distributor

      t.timestamps
    end
    add_reference :players, :team, foreign_key: true
  end
end
