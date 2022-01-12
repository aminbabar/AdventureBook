
@posts.each do |post|
    comments = post.comments
    json.posts do
        json.set! post.id do
            json.extract! post, :author_id, :body, :id, :created_at
            json.photoUrl url_for(post.photo) if post.photo.attached?
            # keep track of all the comment ids in each post
            json.comments do
                json.array! comments, :id
            end
        end
    end
    json.users do
        json.set! post.author_id do
            user = post.author
            json.extract! user, :id, :fname, :lname
            json.photoUrl url_for(user.profile_photo) if user.profile_photo.attached?
        end
    end

    json.comments do
        comments.each do |comment|
            json.set! comment.id do
                json.extract! comment, :id, :post_id, :comment_author_id, :created_at
            end
        end
    end
end