class ChangeFriendRequestsToFriends < ActiveRecord::Migration[6.1]
  def change
    drop_table :friend_requests
    drop_table :friends

  end
  
end
