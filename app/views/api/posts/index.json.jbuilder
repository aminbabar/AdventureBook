all_associated_users = Set.new
all_associated_users << current_user.id
user = User.find_by(id: params[:user_id])

@posts.each do |post|
  comments = post.comments

  post_like_ids = []
  comment_like_ids = Hash.new { |h, k| h[k] = Array.new }

  json.likes do
    post.likes.each do |like|
      all_associated_users << like.author_id
      post_like_ids << like.id
      json.set! like.id do
        json.extract! like, :id, :author_id, :likeable_id, :likeable_type
      end
    end

    comments.each do |comment|
      comment.likes.each do |like|
        all_associated_users << like.author_id
        comment_like_ids[comment.id] << like.id
        json.set! like.id do
          json.extract! like, :id, :author_id, :likeable_id, :likeable_type
        end
      end
    end
  end

  json.posts do
    json.set! post.id do
      all_associated_users << post.author_id
      json.extract! post, :author_id, :body, :id, :created_at
      json.photoUrl url_for(post.photo) if post.photo.attached?

      comment_ids = []
      comments.each do |comment|
        all_associated_users << comment.comment_author_id
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

  json.comments do
    comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :post_id, :comment_author_id, :created_at, :body
        json.likes do
          json.array! comment_like_ids[comment.id]
        end
      end
    end
  end
end

json.friends do
  user&.friends.each do |friend|
    json.set! friend.id do
      all_associated_users << friend.friend_id
      all_associated_users << friend.user_id
      json.extract! friend, :id, :user_id, :friend_id, :friend_status
    end
  end
end

json.users do
  User.get_users(all_associated_users).each do |user|
    json.set! user.id do
      json.extract! user, :id, :email, :first_name, :last_name, :city, :work, :bio, :education, :portfolio, :birthday, :gender
      json.profilePhoto user.profile_photo.attached? ? url_for(user.profile_photo) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
      json.coverPhoto url_for(user.cover_photo) if user.cover_photo.attached?
    end
  end
end

json.potential_friends do
    if user.id == current_user.id
        user.potential_friends.each do |potential_friend|
            json.set! potential_friend.id do
                json.extract! potential_friend, :id, :first_name, :last_name
                json.profilePhoto potential_friend.profile_photo.attached? ? url_for(potential_friend.profile_photo) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
            end
        end
    end
end