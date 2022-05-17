class ChangeFriendRequestsToFriends < ActiveRecord::Migration[6.1]
  def change
    rename_table :friend_requests, :friends
    add_column :friends, :friend_status, :bool, null: false
  end
end
