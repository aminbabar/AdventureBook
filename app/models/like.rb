class Like < ApplicationRecord
    validates :author_id, presence: true

    belongs_to :likeable, polymorphic: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end