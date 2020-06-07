class Question < ApplicationRecord
  validates :asker_id, presence: true
  validates :title, presence: true
  validates :body, presence: true

  belongs_to :user,
  foreign_key: :asker_id,
  class_name: :User

end