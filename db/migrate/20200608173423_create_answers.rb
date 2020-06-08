class CreateAnswers < ActiveRecord::Migration[5.2]
  def change
    create_table :answers do |t|
      t.integer :answerer_id, null: false
      t.integer :question_id, null: false
      t.string :body, null: false
    end
    
    add_index :answers, :answerer_id
    add_index :answers, :question_id
    add_index :answers, :body
  end
end
