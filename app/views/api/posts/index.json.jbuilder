
@posts.each do |post|
    json.set! post.id do
        json.extract! post, :author_id, :body
    end
end