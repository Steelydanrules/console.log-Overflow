class Answer < ApplicationRecord
  validates :answerer_id, presence: true
  validates :question_id, presence: true
  validates :body, presence: true

  belongs_to :question,
  foreign_key: :question_id,
  class_name: :Question

  belongs_to :user,
  foreign_key: :answerer_id,
  class_name: :User

end