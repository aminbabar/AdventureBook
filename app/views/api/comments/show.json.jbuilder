json.extract! @comment, :id, :post_id, :comment_author_id, :created_at, :body

# like ids for the post
json.likes do
    json.array! @comment.likes.pluck(:id)
end

