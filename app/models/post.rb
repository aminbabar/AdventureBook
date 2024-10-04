class Post < ApplicationRecord
    validates :author_id, presence: true
    validates :body, presence: true


    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :comments,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy
    
    has_many :likes, as: :likeable,
        dependent: :destroy


    has_one_attached :photo

    def self.newsfeed_posts(user)
        friend_ids = Friend.where(user_id: user.id, friend_status: true).pluck(:friend_id)
        Post.includes(:author).where(author_id: [user.id] + friend_ids).order(created_at: :desc)
    end

    def self.profile_posts(user_id)
        Post.includes(:author).where(author_id: user_id).order(created_at: :desc)
    end
end
