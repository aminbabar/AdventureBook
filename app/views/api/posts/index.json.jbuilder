
@posts.each do |post|
    json.set! post.id do
        json.extract! post, :author_id, :body, :id, :created_at
        json.extract! post.author, :fname, :lname
    end
end