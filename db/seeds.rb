# Clear existing data
User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all
Friend.destroy_all


user1 = User.create!(
        email: "demouser1@gmail.com",
        first_name: "demo",
        last_name: "user",
        city: "New York",
        work: "Software Engineer",
        password: "123456",
        bio: "Hi! I am a demo user!",
        education: "Bachellors",
        portfolio: "www.aminbabar.com",
        gender: "male",
        birthday: Date.new(1995, 11, 04)
    )


    user1 = User.create!(
        email: "demouser2@gmail.com",
        first_name: "demo2",
        last_name: "user2",
        city: "New York",
        work: "Software Engineer",
        password: "123456",
        bio: "Hi! I am a demo user!",
        education: "Bachellors",
        portfolio: "www.aminbabar.com",
        gender: "male",
        birthday: Date.new(1995, 11, 05)
    )

    # db/seeds.rb


# Create users
users = []

15.times do |n|
  users << User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.unique.email,
    city: Faker::Address.city,
    work: Faker::Job.title,
    password: "password123",
    bio: Faker::Lorem.sentence,
    gender: ["Male", "Female"].sample,
    birthday: Faker::Date.birthday(min_age: 18, max_age: 60)
  )
end

# Create posts, comments, likes, and friend relationships

posts = []

users.each do |user|
  3.times do
    posts << user.posts.create!(
      body: Faker::Lorem.paragraph
    )
  end
end

comments = []

users.each do |user|
  posts.each do |post|
    comments << post.comments.create!(
      body: Faker::Lorem.sentence,
      comment_author: user
    )
  end
end

likes = []

users.each do |user|
  posts.each do |post|
    likes << post.likes.create!(
      author: user
    )
  end
end

puts "Seed data created successfully."
