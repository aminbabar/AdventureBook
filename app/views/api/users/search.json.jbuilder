json.users do
    @users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :first_name, :last_name
            # CHANGE THE DEFAULT PROFILE PIC
            json.profilePhoto user.profile_photo.attached? ?  url_for(user.profile_photo) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
        end
    end
end