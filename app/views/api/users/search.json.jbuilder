json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :first_name, :last_name
            json.profilePhoto url_for(user.profile_photo) if user.profile_photo.attached?
        end
    end
end