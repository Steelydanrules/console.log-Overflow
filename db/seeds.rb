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
  "https://d9kjk42l7bfqz.cloudfront.net/req/202006011/images/headshots/stlouma01-2015.jpg"
]

User.destroy_all
Question.destroy_all
Answer.destroy_all

user_1 = User.create!(  username: "steelydanrules",
  email: "steelydanrules@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_2 = User.create!(  username: "SFSorrow_332",
  email: "SFSorrow_332@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_3 = User.create!(  username: "Mama_Cass",
  email: "Mama_Cass@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_4 = User.create!(  username: "Prez_cuomo",
  email: "Prez_cuomo@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_5 = User.create!(  username: "GOSHAKHTAR",
  email: "GOSHAKHTAR@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_6 = User.create!(  username: "OrdellRobbie",
  email: "Ordell_robbie@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_7 = User.create!(  username: "Rupert_pupkin99",
  email: "Rupert_pupkin99@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_8 = User.create!(  username: "username",
  email: "username@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_9 = User.create!(  username: "shukudai",
  email: "shukudai@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
user_10 = User.create!(
  username: "Lebron_Jaaames",
  email: "Lebron_Jaaames@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
user_11 = User.create!(
  username: "soccer_mom_5464",
  email: "soccer_mom_5464@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)


question_1 = Question.create!(
  asker_id: user_1.id,
  title: "How do i test this 1",
  body: "Look at the body 1",
  tag: "DEMO",
  site_hits: 0
)

question_2 = Question.create!(
  asker_id: user_2.id,
  title: "How do i test this 2",
  body: "Look at the body 2",
  tag: "DEMO",
  site_hits: 0
)

question_3 = Question.create!(
  asker_id: user_3.id,
  title: "How do i test this 3",
  body: "Look at the body 3",
  tag: "DEMO",
  site_hits: 0
)

question_4 = Question.create!(
  asker_id: User.first.id,  
  title: "How do i test this 4",
  body: "Look at the body 4",
  tag: "DEMO",
  site_hits: 0
)

question_5 = Question.create!(
  asker_id: User.second.id,  
  title: "How do i test this 5",
  body: "Look at the body 5",
  tag: "DEMO",
  site_hits: 0
)

question_6 = Question.create!(
  asker_id: User.first.id,  
  title: "How do i test this 6",
  body: "Look at the body 6",
  tag: "DEMO",
  site_hits: 0
)
  
question_7 = Question.create!(
  asker_id: User.second.id,  
  title: "How do i test this 7",
  body: "Look at the body 7",
  tag: "DEMO",
  site_hits: 0
)
        
question_8 = Question.create!(
  asker_id: User.first.id,  
  title: "How do i test this 8",
  body: "Look at the body 8",
  tag: "DEMO",
  site_hits: 0
)

question_9 = Question.create!(
  asker_id: user_9.id,  
  title: "How do i test this 9",
  body: "Look at the body 9",
  tag: "DEMO",
  site_hits: 0
)
              
question_10 = Question.create!(
  asker_id: user_10.id,
  title: "How do i test this 10",
  body: "Look at the body 10",
  tag: "DEMO",
  site_hits: 0
)

question_11 = Question.create!(
  asker_id: user_11.id,
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

answer_1 = Answer.create!(
  answerer_id: user_1.id,
  question_id: question_2.id,
  body: "answer!!"
)
answer_2 = Answer.create!(
  answerer_id: user_2.id,
  question_id: question_2.id,
  body: "answer!!"
)
answer_3 = Answer.create!(
  answerer_id: user_3.id,
  question_id: question_2.id,
  body: "answer!!"
)
answer_4 = Answer.create!(
  answerer_id: user_4.id,
  question_id: question_2.id,
  body: "answer!!"
)
answer_5 = Answer.create!(
  answerer_id: user_5.id,
  question_id: question_2.id,
  body: "answer!!"
)
answer_6 = Answer.create!(
  answerer_id: user_1.id,
  question_id: question_3.id,
  body: "answer!!"
)