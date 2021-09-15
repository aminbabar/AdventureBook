
@posts.each do |post|
    json.posts do
        json.set! post.id do
            json.extract! post, :author_id, :body, :id, :created_at
            json.photoUrl url_for(post.photo) if post.photo.attached?
        end
    end
    json.users do
        json.set! post.author_id do
            json.extract! post.author, :fname, :lname
            json.photoUrl url_for(post.profile_photo) if post.author.profile_photo.attached?
        end
    end
end