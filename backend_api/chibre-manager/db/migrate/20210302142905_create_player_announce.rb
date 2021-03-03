class CreatePlayerAnnounce < ActiveRecord::Migration[6.0]
  def change
    create_table :player_announces do |t|

      t.timestamps

    end

    add_reference :player_announces, :player, foreign_key: true
    add_reference :player_announces, :announce, foreign_key: true
  end
end
