
json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :city, :work, :bio, :education, :portfolio, :birthday, :gender
    json.profilePhoto url_for(@user.profile_photo) if @user.profile_photo.attached?
    json.profilePhoto @user.profile_photo.attached? ?  url_for(@user.profile_photo) : "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
end
