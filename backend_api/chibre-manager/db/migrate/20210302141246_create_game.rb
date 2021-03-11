class CreateGame < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :status
      t.integer :rounds, default: 1
      t.string :atout
      t.integer :points, default: 0
      t.boolean :winner, default: false

      t.timestamps
    end
  end
end
