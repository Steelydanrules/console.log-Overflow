class AddSiteHitsToQuestions < ActiveRecord::Migration[5.2]
  def change
  end
    add_column :questions, :site_hits, :integer

end
