class FriendRequest < ApplicationRecord
    validates :recipient_id, :requester_id, presence: true
    validates :requester_id, uniqueness: {scope: :recipient_id}


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