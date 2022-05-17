class Friend < ApplicationRecord
    validates :user_id, :friend_id, presence: true
    validates :user_id, uniqueness: {scope: :friend_id}
    validates :friend_status, inclusion: { in: [true, false] }

    validate :unique_user_and_friend

    def unique_user_and_friend
        if self.friend_id == self.user_id
            errors[:friend_id] << "can't be friends with yourself"
        end
    end

    # Not needed because going to do a custom active record query
    # belongs_to: :requester,
    #     primary_key: :id,
    #     foreign_key: :requester_id,
    #     class_name: :user

    # belongs_to: :recipient,
    #     primary_key: :id,
    #     foreign_key: :recipient_id,
    #     class_name: :user
end