class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :liker_id, null: false
      t.integer :question_id, null: false
      t.string :type, null: false
    end

    add_index :votes, :liker_id
    add_index :votes, :question_id
    add_index :votes, :type
  end
end
