# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_22_172840) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answer_votes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.integer "answer_id", null: false
    t.string "like_or_dislike", null: false
    t.index ["answer_id"], name: "index_answer_votes_on_answer_id"
    t.index ["like_or_dislike"], name: "index_answer_votes_on_like_or_dislike"
    t.index ["liker_id"], name: "index_answer_votes_on_liker_id"
  end

  create_table "answers", force: :cascade do |t|
    t.integer "answerer_id", null: false
    t.integer "question_id", null: false
    t.string "body", null: false
    t.index ["answerer_id"], name: "index_answers_on_answerer_id"
    t.index ["body"], name: "index_answers_on_body"
    t.index ["question_id"], name: "index_answers_on_question_id"
  end

  create_table "questions", force: :cascade do |t|
    t.integer "asker_id", null: false
    t.string "title", null: false
    t.text "body", null: false
    t.string "tag"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "site_hits"
    t.index ["asker_id"], name: "index_questions_on_asker_id"
    t.index ["body"], name: "index_questions_on_body"
    t.index ["tag"], name: "index_questions_on_tag"
    t.index ["title"], name: "index_questions_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "profile_photo_url"
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

  create_table "votes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.integer "question_id", null: false
    t.string "like_or_dislike", null: false
    t.index ["like_or_dislike"], name: "index_votes_on_like_or_dislike"
    t.index ["liker_id"], name: "index_votes_on_liker_id"
    t.index ["question_id"], name: "index_votes_on_question_id"
  end

end
