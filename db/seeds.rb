# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

seed_urls = [
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/mcdonry01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stralan01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stepade01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/lundqhe01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/zuccama01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/brassde01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/boylebr01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/hagelca01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/nashri01-2017.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/mooredo01-2017.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/callary01-2020.jpg",
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stlouma01-2015.jpg",
  "https://www.hockey-reference.com/players/m/millejt01.html"
]

User.delete_all
Question.delete_all

User.create!(
  id: 1,
  username: "steelydanrules",
  email: "steelydanrules@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

User.create!(
  id: 2,
  username: "SFSorrow_332",
  email: "SFSorrow_332@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

User.create!(
  id: 3,
  username: "Mama_Cass",
  email: "Mama_Cass@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

User.create!(
  id: 4,
  username: "Prez_cuomo",
  email: "Prez_cuomo@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

User.create!(
  id: 5,
  username: "GOSHAKHTAR",
  email: "GOSHAKHTAR@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

User.create!(
  id: 6,
  username: "OrdellRobbie",
  email: "Ordell_robbie@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
User.create!(
  id: 7,
  username: "Rupert_pupkin99",
  email: "Rupert_pupkin99@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
User.create!(
  id: 8,
  username: "username",
  email: "username@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
User.create!(
  id: 9,
  username: "shukudai",
  email: "shukudai@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
User.create!(
  id: 10,
  username: "Lebron_Jaaames",
  email: "Lebron_Jaaames@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
User.create!(
  id: 11,
  username: "soccer_mom_5464",
  email: "soccer_mom_5464@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)


Question.create!(
  id: 1,
  asker_id: 1,
  title: "How do i test this 1",
  body: "Look at the body 1",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 2,
  asker_id: 2,
  title: "How do i test this 2",
  body: "Look at the body 2",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 3,
  asker_id: 3,
  title: "How do i test this 3",
  body: "Look at the body 3",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 4,
  asker_id: 4,
  title: "How do i test this 4",
  body: "Look at the body 4",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 5,
  asker_id: 5,
  title: "How do i test this 5",
  body: "Look at the body 5",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 6,
  asker_id: 6,
  title: "How do i test this 6",
  body: "Look at the body 6",
  tag: "DEMO",
  site_hits: 0
)
  
Question.create!(
  id: 7,
  asker_id: 7,
  title: "How do i test this 7",
  body: "Look at the body 7",
  tag: "DEMO",
  site_hits: 0
)
        
Question.create!(
  id: 8,
  asker_id: 8,
  title: "How do i test this 8",
  body: "Look at the body 8",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 9,
  asker_id: 9,
  title: "How do i test this 9",
  body: "Look at the body 9",
  tag: "DEMO",
  site_hits: 0
)
              
Question.create!(
  id: 10,
  asker_id: 10,
  title: "How do i test this 10",
  body: "Look at the body 10",
  tag: "DEMO",
  site_hits: 0
)

Question.create!(
  id: 11,
  asker_id: 11,
  title: "How do i test this 10",
  body: "Contrary to popular belief, Lorem Ipsum is not simply random text. 
  It has roots in a piece of classical Latin literature from 45 BC, making it 
  over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney 
  College in Virginia, looked up one of the more obscure Latin words, 
  consectetur, from a Lorem Ipsum passage, and going through the cites of the 
  word in classical literature, discovered the undoubtable source. Lorem Ipsum 
  comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum 
  (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a 
  treatise on the theory of ethics, very popular during the Renaissance. The 
  first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line 
  in section 1.10.32.",
  tag: "DEMO",
  site_hits: 0
)