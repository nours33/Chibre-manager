class CreatePlayer < ActiveRecord::Migration[6.0]
  def change
    create_table :players do |t|
      t.string :name
      t.boolean :first_to_play
      t.boolean :distributor
      t.string :position

      t.timestamps
    end
    add_reference :players, :team, foreign_key: true
  end
end
