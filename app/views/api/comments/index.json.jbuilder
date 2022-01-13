# Handling this logic in posts jbuilder instead
# @comments.each do |comment|
#     json.comments do
#         json.set! comment.id do
#             json.extract! comment, :body, :post_id, :comment_author_id
#         end
#     end

#     json.users do
#         json.set! comment.author_id do
#             user = comment.author
#             json.extract! user, :id, :fname, :lname
#             json.photoUrl url_for(user.profile_photo) if user.profile_photo.attached?
#         end
#     end
# end