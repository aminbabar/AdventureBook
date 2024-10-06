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

  author_ids = [user.id] + friend_ids

  Post.where(author_id: author_ids)
      .includes(
        :photo_attachment,
        :photo_blob,
        :likes => [:author => [
          :profile_photo_attachment,
          :profile_photo_blob
        ]],
        author: [
          :profile_photo_attachment,
          :profile_photo_blob,
          :cover_photo_attachment,
          :cover_photo_blob
        ],
        comments: [
          { author: [
              :profile_photo_attachment,
              :profile_photo_blob,
              :cover_photo_attachment,
              :cover_photo_blob
            ] },
          :likes => [:author => [
              :profile_photo_attachment,
              :profile_photo_blob
            ]]
        ]
      )
      .order(created_at: :desc)
end

  
  def self.profile_posts(user_id)
    Post.where(author_id: user_id)
        .includes(
          :photo_attachment,                                       
          :photo_blob,                                             
          :likes,                                                  
            author: [:profile_photo_attachment, :profile_photo_blob, :cover_photo_attachment, :cover_photo_blob],
           comments: [
            { author: [
                :profile_photo_attachment,
                :profile_photo_blob,
                :cover_photo_attachment,
                :cover_photo_blob
                ] },
            :likes => [:author => [
                :profile_photo_attachment,
                :profile_photo_blob
                ]]
            ]                          
        )
        .order(created_at: :desc)
  end
end
