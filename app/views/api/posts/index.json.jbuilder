
@posts.each do |post|
    json.set! post.id do
        json.extract! post, :author_id, :body, :id, :created_at
        json.extract! post.author, :fname, :lname
        json.photoUrl url_for(post.photo) if post.photo.attached?
    end
end