
json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :city, :work, :bio, :education, :portfolio, :birthday, :gender
    json.profilePhoto url_for(@user.profile_photo) if @user.profile_photo.attached?
    json.coverPhoto url_for(@user.cover_photo) if @user.cover_photo.attached?
end
