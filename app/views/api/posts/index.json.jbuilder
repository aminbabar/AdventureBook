
@posts.each do |post|
    comments = post.comments

    post_like_ids = []
    comment_like_ids = []


    json.likes do
        post.likes.each do |like|
            post_like_ids << like.id
            json.set! like.id do
                json.extract! like, :author_id, :likeable_id, :likeable_type
            end
        end

        comments.each do |comment|
            comment.likes.each do |like|
                comment_like_ids << like.id
                json.set! like.id do
                    json.extract! like, :author_id, :likeable_id, :likeable_type
                end
            end
        end
    end

    json.posts do
        json.set! post.id do
            json.extract! post, :author_id, :body, :id, :created_at
            json.photoUrl url_for(post.photo) if post.photo.attached?

            # keep track of all the comment ids in each post
            comment_ids = []
            comments.each do |comment|
                comment_ids << comment.id
            end
            json.comments do
                json.array! comment_ids
            end

            json.likes do
                json.array! post_like_ids
            end
        end
    end

    json.users do
        json.set! post.author_id do
            user = post.author
            json.extract! user, :id, :email, :fname, :lname, :city, :work, :bio, :education, :portfolio
            json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?
            json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
        end
    end

    json.comments do
        comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :post_id, :comment_author_id, :created_at, :body
                json.likes do
                    json.array! comment_like_ids
                end
            end
        end
    end


end