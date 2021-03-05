# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_02_142905) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "announces", force: :cascade do |t|
    t.string "name"
    t.integer "points"
    t.integer "rounds"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "games", force: :cascade do |t|
    t.string "name"
    t.integer "status"
    t.integer "rounds", default: 1
    t.integer "atout"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "player_announces", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "player_id"
    t.bigint "announce_id"
    t.index ["announce_id"], name: "index_player_announces_on_announce_id"
    t.index ["player_id"], name: "index_player_announces_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.boolean "first_to_play"
    t.boolean "distributor"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "team_id"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "teams", force: :cascade do |t|
    t.string "name"
    t.integer "points", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "game_id"
    t.index ["game_id"], name: "index_teams_on_game_id"
  end

  add_foreign_key "player_announces", "announces"
  add_foreign_key "player_announces", "players"
  add_foreign_key "players", "teams"
  add_foreign_key "teams", "games"
end
