json.post do
    json.extract! @post, :id, :author_id, :body, :created_at
    json.photoUrl url_for(@post.photo) if @post.photo.attached?
    # json.extract! post.author, :fname, :lname
    # keep track of all the comment ids in each post
    comment_ids = []
    @post.comments.each do |comment|
        comment_ids << comment.id
    end
    json.comments do
        json.array! comment_ids
    end
end

json.user do
    json.extract! @post.author, :id, :fname, :lname
    json.photoUrl url_for(@post.author.profile_photo) if @post.author.profile_photo.attached?
end



