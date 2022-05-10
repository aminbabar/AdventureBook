
@friend_requests.each do |friend_request|
    json.set! friend_request.id do
        json.extract! friend_request, :id, :requester_id, :recipient_id
    end
end