class CreateAnswerVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_votes do |t|
      t.integer :liker_id, null: false
      t.integer :answer_id, null: false
      t.string :like_or_dislike, null: false
    end

    add_index :answer_votes, :liker_id
    add_index :answer_votes, :answer_id
    add_index :answer_votes, :like_or_dislike
  end
end
