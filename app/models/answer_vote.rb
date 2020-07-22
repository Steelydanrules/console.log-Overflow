class AnswerVote < ApplicationRecord
  validates :liker_id, presence: true
  validates :answer_id, presence: true

  belongs_to :liker,
  foreign_key: :liker_id,
  class_name: :User

  belongs_to :answer,
  foreign_key: :answer_id,
  class_name: :Answer
  
end

