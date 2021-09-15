json.post do
    json.extract! @post, :id, :author_id, :body, :created_at
    json.photoUrl url_for(@post.photo) if @post.photo.attached?
    # json.extract! post.author, :fname, :lname
end

json.user do
    json.extract! @post.author, :fname, :lname
    json.photoUrl url_for(@post.profile_photo) if @post.author.profile_photo.attached?
end