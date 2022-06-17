json.extract! @comment, :body, :post_id, :comment_author_id, :id

# like ids for the post
json.likes do
    json.array! @comment.likes.pluck(:id)
end

