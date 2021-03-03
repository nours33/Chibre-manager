class CreateGame < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :name
      t.integer :status
      t.integer :round, default: 0
      t.integer :atout

      t.timestamps
    end
  end
end
