class Question < ApplicationRecord
  validates :asker_id, presence: true
  validates :title, presence: true
  validates :body, presence: true
  # validate :at_least_one_site_hit

  belongs_to :user,
  foreign_key: :asker_id,
  class_name: :User

  has_many :answers,
  foreign_key: :question_id,
  class_name: :Answer

  has_many :users_who_answered_question,
  through: :answers,
  source: :user

  # def at_least_one_site_hit 
  #   if this.sit_hits = nil
  #     this.site_hits = 0
  #   end
  # end



end