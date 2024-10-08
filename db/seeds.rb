# Clear existing data
User.destroy_all
Post.destroy_all
Comment.destroy_all
Like.destroy_all
Friend.destroy_all


user1 = User.create!(
        email: "demouser@gmail.com",
        first_name: "Demo",
        last_name: "User",
        city: "New York",
        work: "Software Engineer",
        password: "123456",
        bio: "Hi! I am a demo user!",
        education: "Bachellors",
        portfolio: "www.aminbabar.com",
        gender: "male",
        birthday: Date.new(1995, 11, 04)
    )


    user2 = User.create!(
        email: "demouser2@gmail.com",
        first_name: "Demo2",
        last_name: "User2",
        city: "New York",
        work: "Software Engineer",
        password: "123456",
        bio: "Hi! I am a demo user!",
        education: "Bachellors",
        portfolio: "www.aminbabar.com",
        gender: "male",
        birthday: Date.new(1995, 11, 05)
    )



# # Create users
# users = [user1, user2]

# 15.times do |n|
#   users << User.create!(
#     first_name: Faker::Name.first_name,
#     last_name: Faker::Name.last_name,
#     email: Faker::Internet.unique.email,
#     city: Faker::Address.city,
#     work: Faker::Job.title,
#     password: "password123",
#     bio: Faker::Lorem.sentence,
#     gender: ["Male", "Female"].sample,
#     birthday: Faker::Date.birthday(min_age: 18, max_age: 60)
#   )
# end

# # Create posts, comments, likes, and friend relationships

# posts = []

# users.each do |user|
#   3.times do
#     posts << user.posts.create!(
#       body: Faker::Lorem.paragraph
#     )
#   end
# end

# comments = []

# users.each do |user|
#   posts.each do |post|
#     if rand(1..10) < 8
#       next
#     end
#     comments << post.comments.create!(
#       body: Faker::Lorem.sentence,
#       comment_author_id: user.id
#     )
#   end
# end

# likes = []

# users.each do |user|
#   posts.each do |post|
#     if rand(1..10) < 7
#       next
#     end
#     likes << post.likes.create!(
#       author_id: user.id
#     )
#   end
# end

# puts "Seed data created successfully."


# db/seeds.rb

require 'faker'

adventure_types = [
  { type: 'Mountain Hiker', bio: 'Lover of the mountains and all things hiking. Always on the lookout for the next great trail!' },
  { type: 'Road Biker', bio: 'Cycling is my passion. Whether it is mountain biking or a long road trip, I am ready to ride.' },
  { type: 'Rock Climber', bio: 'Scaling cliffs and reaching the top is the ultimate adventure.' },
  { type: 'River Kayaker', bio: 'Whitewater, lakes, or oceans, kayaking is what sets me free.' },
  { type: 'Skydiving Enthusiast', bio: 'Jumping out of planes to feel the thrill of the skies.' },
  { type: 'Scuba Diver', bio: 'Exploring the underwater world one dive at a time.' },
  { type: 'Camp Lover', bio: 'Camping under the stars and in the wild is where I find peace.' },
  { type: 'Trail Runner', bio: 'Running on trails, in nature, far from the noise of the city.' },
  { type: 'World Backpacker', bio: 'Exploring the world one country at a time, with nothing but a backpack.' },
  { type: 'Snowboard Rider', bio: 'Shredding down the slopes, living for the winter.' },
  { type: 'Lake Paddleboarder', bio: 'Gliding across calm waters on a paddleboard brings me joy.' },
  { type: 'Paragliding Pilot', bio: 'Flying through the skies with nothing but a paraglider and the wind.' },
  { type: 'Mountain Climber', bio: 'Conquering the tallest peaks and living life above the clouds.' },
  { type: 'Ocean Sailor', bio: 'Navigating the open seas, feeling the wind in my sails.' },
  { type: 'Cave Explorer', bio: 'Venturing into the depths of the earth, exploring hidden caves.' },
  { type: 'Wild Swimmer', bio: 'Diving into lakes, rivers, and oceans, embracing the wild waters.' },
  { type: 'Horseback Rider', bio: 'Galloping through fields and forests, connecting with nature on horseback.' },
  { type: 'Snow Skier', bio: 'Carving down snowy mountains, feeling the rush of the descent.' },
  { type: 'Desert Trekker', bio: 'Traversing vast deserts, experiencing the beauty of the arid landscape.' },
  { type: 'Bird Watcher', bio: 'Watching and documenting different bird species in their natural habitats.' },
  { type: 'Whitewater Rafter', bio: 'Enjoys the thrill of navigating wild rivers and rapids.' },
  { type: 'Glider Pilot', bio: 'Soaring through the skies without an engine, just the wind to guide me.' },
  { type: 'Ocean Kite Surfer', bio: 'Harnessing the power of the wind and waves to glide across the ocean.' },
  { type: 'Forest Forager', bio: 'Exploring forests and gathering edible plants, mushrooms, and herbs.' },
  { type: 'Mountain Biker', bio: 'Taking on rugged trails and steep descents on two wheels.' },
  { type: 'Arctic Explorer', bio: 'Traveling to the most frigid parts of the world, braving the cold.' },
  { type: 'Cave Speleologist', bio: 'Studying and exploring caves, from tight passages to vast underground chambers.' },
  { type: 'Off-Road Driver', bio: 'Driving through uncharted paths and rugged terrain in a 4x4.' },
]

# Seed Users
adventure_types.each do |adventure|
  first_name = adventure[:type].split.first
  last_name = adventure[:type].split.last || 'Adventurer'

  User.create!(
    first_name: first_name,
    last_name: last_name,
    email: Faker::Internet.unique.email,
    city: Faker::Address.city,
    work: Faker::Company.name,
    password_digest: BCrypt::Password.create('password'),
    session_token: SecureRandom.urlsafe_base64,
    bio: adventure[:bio],
    education: Faker::University.name,
    portfolio: Faker::Internet.url,
    gender: %w[Male Female Non-binary].sample,
    birthday: Faker::Date.birthday(min_age: 18, max_age: 65)
  )
end

# Seed Posts
User.all.each do |user|
  case user.first_name
  when 'Mountain'
    Post.create!(
      author_id: user.id,
      body: "Just completed an incredible 12-mile hike up the Rocky Mountains. The view was breathtaking!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Found an amazing hidden trail today! Nature never ceases to amaze me.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Road'
    Post.create!(
      author_id: user.id,
      body: "Cycled 50 miles today on the open road. Feeling the wind on my face was pure freedom!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Joined a group ride this morning. The camaraderie and scenery made it unforgettable.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Rock'
    Post.create!(
      author_id: user.id,
      body: "Scaled a challenging rock face today. The thrill of reaching the top is unmatched!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Tried a new climbing technique and it worked perfectly! Feeling accomplished.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'River'
    Post.create!(
      author_id: user.id,
      body: "Kayaked down a beautiful river today. The rapids were exhilarating!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Saw some amazing wildlife while kayaking. The connection with nature is incredible.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Skydiving'
    Post.create!(
      author_id: user.id,
      body: "Jumped out of a plane today! The adrenaline rush was like nothing else.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Tandem skydive complete! I can't wait to do it solo next time.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    when 'Scuba'
    Post.create!(
      author_id: user.id,
      body: "Went diving at a coral reef today. The underwater world is so mesmerizing!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Spotted a school of colorful fish while diving. It was like being in another world!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Camp'
    Post.create!(
      author_id: user.id,
      body: "Set up camp in a beautiful spot by the lake. Nothing beats a night under the stars.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Cooked some delicious food over the campfire. Camping is all about simple joys!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Trail'
    Post.create!(
      author_id: user.id,
      body: "Ran 10 miles on the forest trail today. The fresh air and scenery were amazing!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Pushed myself to run faster today and beat my personal best. Feeling great!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'World'
    Post.create!(
      author_id: user.id,
      body: "Backpacking across Europe has been an incredible journey so far. Met so many great people!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Found a hidden gem of a village today while backpacking. These moments make it all worth it.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Snowboard'
    Post.create!(
      author_id: user.id,
      body: "Had an amazing day shredding down the slopes. The powder was perfect!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Tried a new trick today while snowboarding and nailed it! Can't wait to do it again.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Lake'
    Post.create!(
      author_id: user.id,
      body: "Spent the day paddleboarding on the lake. The calm waters were so relaxing!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Saw a beautiful sunset while paddleboarding. Moments like these make it all worth it.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Paragliding'
    Post.create!(
      author_id: user.id,
      body: "Went paragliding today. Flying through the air felt so freeing!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Caught some great thermals while paragliding. It was an unforgettable flight!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Mountain Climber'
    Post.create!(
      author_id: user.id,
      body: "Reached the summit of a tough climb today. The view from the top made it all worthwhile!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Spent hours climbing today and every moment was an adventure. Loving the challenge!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Ocean'
    Post.create!(
      author_id: user.id,
      body: "Set sail for the open ocean today. Nothing beats the feeling of freedom out here!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Caught some wind and made great time today. Sailing is my happy place!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Cave'
    Post.create!(
      author_id: user.id,
      body: "Explored a deep cave today. The rock formations were awe-inspiring!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Went spelunking with friends and discovered a hidden chamber. Amazing experience!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Wild'
    Post.create!(
      author_id: user.id,
      body: "Went for a wild swim in a beautiful lake today. The water was crystal clear!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Swam across the river and felt so connected to nature. What a refreshing adventure!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Horseback'
    Post.create!(
      author_id: user.id,
      body: "Rode through the forest on horseback today. Felt so free and in tune with nature!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "My horse and I had a great run today across open fields. What an amazing ride!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Snow'
    Post.create!(
      author_id: user.id,
      body: "Had an awesome day skiing down the slopes. The snow was perfect for carving!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Took on a new challenging run today while skiing. Can't wait to do it again!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Desert'
    Post.create!(
      author_id: user.id,
      body: "Hiked across the desert today. The vast landscapes were both challenging and beautiful.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Watched the sunset over the desert dunes. It was one of the most beautiful sights I've ever seen.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Bird'
    Post.create!(
      author_id: user.id,
      body: "Spent the day birdwatching in a nearby forest. Saw some rare species that made my day!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Identified over 20 different birds today. What a fulfilling experience!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Whitewater'
    Post.create!(
      author_id: user.id,
      body: "Went whitewater rafting today. The rapids were intense and exhilarating!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Managed to navigate some really challenging rapids today. What an adrenaline rush!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Glider'
    Post.create!(
      author_id: user.id,
      body: "Had my first solo glider flight today. The feeling of soaring through the sky is incomparable!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Caught some perfect thermals and stayed up in the air for hours. Loved every second!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Ocean Kite'
    Post.create!(
      author_id: user.id,
      body: "Went kite surfing today. The combination of wind and waves is pure bliss!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Had an incredible session kite surfing with some great friends. The ocean was perfect today!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Forest'
    Post.create!(
      author_id: user.id,
      body: "Spent the day foraging in the forest. Found some edible mushrooms and herbs!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Foraged some wild berries today. Nothing beats the taste of fresh, natural food!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Mountain Biker'
    Post.create!(
      author_id: user.id,
      body: "Rode some challenging mountain trails today. The descents were thrilling!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Tried out a new mountain biking route today. The views were incredible and the ride was epic!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Arctic'
    Post.create!(
      author_id: user.id,
      body: "Explored the Arctic today. The icy landscape was both beautiful and challenging!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Saw some incredible wildlife today while exploring the Arctic. What a humbling experience!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Cave'
    Post.create!(
      author_id: user.id,
      body: "Explored a complex cave system today. The underground chambers were fascinating!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Spent hours navigating tight cave passages. It's amazing to see what lies beneath the surface.",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Off-Road'
    Post.create!(
      author_id: user.id,
      body: "Took my 4x4 off-road today. The rough terrain made for an exhilarating ride!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Explored some remote areas off-road. It's always an adventure getting off the beaten path!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
  when 'Wild'
    Post.create!(
      author_id: user.id,
      body: "Built a shelter in the wild today using just natural materials. It was a real test of my bushcraft skills!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
    Post.create!(
      author_id: user.id,
      body: "Foraged and cooked my own meal in the wild today. Living off the land feels so rewarding!",
      created_at: Faker::Time.between(from: 30.days.ago, to: Time.now)
    )
end
end

# Seed Friendships
users = User.all
users.each do |user|
  friends = users.where.not(id: user.id).sample(rand(3..5))
  friends.each do |friend|
    unless Friend.exists?(user_id: user.id, friend_id: friend.id) || Friend.exists?(user_id: friend.id, friend_id: user.id)
      Friend.create!(user_id: user.id, friend_id: friend.id, friend_status: true)
    end
  end
end


# Seed post likes
posts = Post.all
posts.each do |post|
  rand(0..12).times do
    author = User.all.sample
    unless Like.exists?(author_id: author.id, likeable: post)
      Like.create!(author_id: author.id, likeable: post)
    end
  end
end



# Seed Comments
posts.each do |post|
  case post.body
  when /hike up the Rocky Mountains/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "That sounds like an amazing adventure! The Rockies are beautiful.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "I would love to hike there someday!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /hidden trail today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Hidden trails are the best! They always lead to unexpected beauty.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Sounds like a great find. Nature really does surprise us!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Cycled 50 miles today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Wow, 50 miles is impressive! Must have been an amazing ride.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Nothing like the feeling of the wind in your face on a long ride!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /group ride this morning/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Group rides are so much fun! Glad you enjoyed it.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The camaraderie is what makes group rides special!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    when /rock face today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Rock climbing is such an incredible challenge. Great job reaching the top!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The thrill of climbing is hard to beat!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /new climbing technique/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Trying new techniques can be so rewarding. Way to go!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "That sounds amazing! Can't wait to try it myself.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /beautiful river today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Kayaking on a beautiful river is such a peaceful experience. Glad you enjoyed it!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Nature's beauty is unmatched. Sounds like a great day!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /amazing wildlife while kayaking/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Wildlife sightings make kayaking so special!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Sounds like an incredible adventure. Love being close to nature!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Jumped out of a plane today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "That must have been an epic adrenaline rush!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "You're so brave! I can't imagine jumping out of a plane.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Tandem skydive complete/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Congratulations on your tandem jump! Solo skydiving will be even more thrilling!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Skydiving is such an amazing experience. Can't wait for your solo jump!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /diving at a coral reef/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The underwater world is truly mesmerizing! Glad you had a great dive.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Coral reefs are so full of life. What a fantastic adventure!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /school of colorful fish/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Seeing colorful fish is always a magical moment!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Diving is like stepping into another world. Sounds amazing!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Set up camp in a beautiful spot by the lake/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Camping by the lake sounds so peaceful! Nothing beats a night under the stars.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "I love camping by water. The views must have been amazing!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Cooked some delicious food over the campfire/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Campfire food always tastes the best!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "There's nothing like a meal cooked over an open flame. Sounds wonderful!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Ran 10 miles on the forest trail/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "10 miles is impressive! The forest must have been beautiful this time of year.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Running in nature is so rejuvenating. Great job on the distance!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Pushed myself to run faster today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Beating your personal best is always such a great feeling! Congrats!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Pushing yourself is what it's all about. Well done!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Backpacking across Europe/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Backpacking through Europe sounds incredible! Glad you're meeting great people.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Europe has so many hidden gems. Enjoy every moment!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Found a hidden gem of a village/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Those little villages are always the best finds! Sounds amazing.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "It's moments like that that make backpacking worth it. Great discovery!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /shredding down the slopes/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The powder must have been perfect! Sounds like an awesome day.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Nothing beats a day on the slopes when the conditions are just right!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Tried a new trick today while snowboarding/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Nailing a new trick is always such a great feeling! Well done!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Can't wait to see what you try next! Keep pushing those limits.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /paddleboarding on the lake/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Paddleboarding is so relaxing. The lake must have been beautiful!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Glad you had a peaceful day out on the water. It's the best way to unwind!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /beautiful sunset while paddleboarding/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "A sunset on the water is always magical!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Those are the moments we live for. Glad you enjoyed it!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Went paragliding today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Paragliding must have been such an amazing experience! So freeing.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The view from up there must have been incredible!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Caught some great thermals while paragliding/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Catching those thermals must have been a blast! Sounds unforgettable.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Paragliding is all about those perfect moments. Glad you had one!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Reached the summit of a tough climb today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Reaching the summit is always such a rewarding experience! Amazing job.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The view from the top must have been incredible. Well done!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Spent hours climbing today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "The dedication it takes to spend hours climbing is admirable! Keep it up!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Climbing is all about embracing the challenge. Glad you enjoyed it!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Set sail for the open ocean today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Sailing on the open ocean is pure freedom. Sounds amazing!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "There's nothing quite like the ocean breeze. Glad you enjoyed it!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Caught some wind and made great time today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Great to hear you had a good day out sailing! The ocean is the best place to be.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Sailing is all about those perfect windy moments. Sounds like a great day!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Explored a deep cave today/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Cave exploration must have been fascinating! Those formations are amazing.", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Exploring caves is such an adventure. Glad you had a great time!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Went spelunking with friends/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Spelunking is always more fun with friends. Glad you discovered something special!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Finding a hidden chamber sounds amazing. What a great adventure!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Went for a wild swim in a beautiful lake/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Swimming in a lake like that must have been so refreshing!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "There's nothing like a wild swim to connect with nature. Sounds fantastic!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  when /Swam across the river/
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Crossing a river like that is such a great adventure!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Wild swimming is so invigorating. Glad you enjoyed it!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
    Comment.create!(post_id: post.id, comment_author_id: User.all.sample.id, body: "Seeing colorful fish is always a magical moment!", created_at: Faker::Time.between(from: post.created_at, to: Time.now))
  end
end


# seed comment likes
comments = Comment.all

comments.each do |comment|
  likes_count = case rand(100)
                when 0..80 then 0  
                when 81..95 then rand(1..3)  
                else rand(8..12)  
                end

  likes_count.times do
    user = User.order("RANDOM()").first
    Like.create(author_id: user.id, likeable: comment)
  end
end
