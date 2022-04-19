
json.user do
    json.extract! @user, :id, :email, :fname, :lname, :city, :work
    json.profilePhoto = url_for(@user.profile_photo) if @user.profile_photo.attached?
    json.coverPhoto = url_for(@user.cover_photo) if @user.cover_photo.attached?
end
