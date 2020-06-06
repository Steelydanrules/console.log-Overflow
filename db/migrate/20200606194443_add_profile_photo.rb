class AddProfilePhoto < ActiveRecord::Migration[5.2]
  def change
  end
  add_column :users, :profile_photo_url, :string
end
