class UpdateVotesType < ActiveRecord::Migration[5.2]
  def change
  end

  rename_column :votes, :type, :like_or_dislike
end
