
@posts.each do |post|
    json.posts do
        json.set! post.id do
            json.extract! post, :author_id, :body, :id, :created_at
            json.photoUrl url_for(post.photo) if post.photo.attached?
        end
    end
    json.users do
        json.set! post.author_id do
            user = post.author
            json.extract! user, :fname, :lname
            json.photoUrl url_for(user.profile_photo) if user.profile_photo.attached?
        end
    end
end