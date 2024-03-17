# post like ids and comment like ids array created to avoid iterating again and
# optimize
post_like_ids = []
comment_like_ids = []
json.likes do
    @post.likes.each do |like|
        post_like_ids << like.id
        json.set! like.id do
            json.extract! like, :id, :author_id, :likeable_id, :likeable_type
        end
    end

    @post.comments.each do |comment|
        comment.likes.each do |like|
            comment_like_ids << like.id
            json.set! like.id do
                json.extract! like, :id, :author_id, :likeable_id, :likeable_type
            end
        end
    end
end


json.post do
    json.extract! @post, :id, :author_id, :body, :created_at
    json.photoUrl url_for(@post.photo) if @post.photo.attached?
    # json.extract! post.author, :first_name, :last_name
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

user = @post.author
json.user do
    json.extract! user, :id, :email, :first_name, :last_name, :city, :work, :bio, :education, :portfolio, :birthday, :gender
    json.profilePhoto user.profile_photo.attached? ?  url_for(user.profile_photo) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
    json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
end



