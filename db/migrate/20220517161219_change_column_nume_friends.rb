class ChangeColumnNumeFriends < ActiveRecord::Migration[6.1]
  def change
    rename_column :friends, :requester_id, :user_id
    rename_column :friends, :recipient_id, :friend_id
  end
end
