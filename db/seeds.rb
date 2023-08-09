# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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