class CreateAnnounce < ActiveRecord::Migration[6.0]
  def change
    create_table :announces do |t|
      t.string :name
      t.integer :points
      t.integer :rounds

      t.timestamps
    end
  end
end
