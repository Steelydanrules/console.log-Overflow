class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :asker_id, null: false
      t.string :title, null: false
      t.text :body, null: false 
      t.string :tag

      t.timestamps
    end
    add_index :questions, :asker_id
    add_index :questions, :title
    add_index :questions, :body
    add_index :questions, :tag
  end
end
