class ChangeFriendsAddDefaultFriendStatus < ActiveRecord::Migration[6.1]
  def change
    remove_column :friends, :friend_status
    add_column :friends, :friend_status, :bool, null: false, default: false
  end
end
