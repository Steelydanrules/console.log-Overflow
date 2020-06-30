class Vote < ApplicationRecord
  validates :liker_id, presence: true
  validates :question_id, presence: true

  belongs_to :liker,
  foreign_key: :liker_id,
  class_name: :User

  belongs_to :question,
  foreign_key: :question_id,
  class_name: :Question
  
end

