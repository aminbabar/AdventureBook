class Post < ApplicationRecord
    validates :author_id, presence: true
    validates :body, presence: true


    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User
end
