
@friend_requests.each do |friend_request|
    json.extract! friend_request, :id, :requester_id, :recipient_id
end