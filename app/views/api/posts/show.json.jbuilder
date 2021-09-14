json.extract! @post, :id, :author_id, :body, :created_at
json.extract! @post.author, :fname, :lname
json.photoUrl url_for(@post.photo) if @post.photo.attached?