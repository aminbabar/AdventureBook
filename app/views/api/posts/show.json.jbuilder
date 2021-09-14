json.extract! @post, :id, :author_id, :body, :created_at
json.extract! @post.author, :fname, :lname