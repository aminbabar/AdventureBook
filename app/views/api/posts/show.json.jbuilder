# post like ids and comment like ids array created to avoid iterating again and
# optimize
post_like_ids = []
comment_like_ids = []
json.likes do
    @post.likes.each do |like|
        post_like_ids << like.id
        json.set! like.id do
            json.extract! like, :author_id, :likeable_id, :likeable_type
        end
    end

    @post.comments.each do |comment|
        comment.likes.each do |like|
            comment_like_ids << like.id
            json.set! like.id do
                json.extract! like, :author_id, :likeable_id, :likeable_type
            end
        end
    end
end


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

    json.likes do
        json.array! post_like_ids
    end
end

json.user do
    json.extract! @post.author, :id, :fname, :lname, :bio
    json.photoUrl url_for(@post.author.profile_photo) if @post.author.profile_photo.attached?
end



