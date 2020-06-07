class Question < ApplicationRecord
  validates :asker_id, presence: true
  validates :title, presence: true
  validates :body, presence: true
  # valiedate :at_least_one_site_hit

  belongs_to :user,
  foreign_key: :asker_id,
  class_name: :User

  # def at_least_one_site_hit 
  #   if this.sit_hits = nil
  #     this.site_hits = 0
  #   end
  # end



end