class CreateFriendRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, null: false
      t.integer :recipient_id, null: false
      t.timestamps
    end

    add_index :friend_requests, [:requester_id, :recipient_id], unique: true
  end
end
