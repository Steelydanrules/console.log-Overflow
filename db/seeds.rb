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

user_2 = User.create!(  username: "hquddus93",
  email: "hquddus93@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_3 = User.create!(  username: "sinoyuco",
  email: "sinoyuco@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_4 = User.create!(  username: "Prez_cuomo",
  email: "Prez_cuomo@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_5 = User.create!(  username: "omelnykov1",
  email: "GOSHAKHTAR@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_6 = User.create!(  username: "Mama_Cass",
  email: "Mama_Cass@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_7 = User.create!(  username: "Rupert_pupkin99",
  email: "Rupert_pupkin99@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_8 = User.create!(  username: "adreeyun",
  email: "adreeyun@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)

user_9 = User.create!(  username: "aklee2106",
  email: "aklee2106@consolelogoverflow.com",
  password: "123456",
  profile_photo_url: seed_urls.sample
)
user_10 = User.create!(
  username: "Lebron_Jaames",
  email: "Lebron_Jaames@consolelogoverflow.com",
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
  title: "How do I log something to the console?",
  body: "I've been up all night trying to get something to log to the console! I tried everything! Somebody please help!",
  tag: "DEMO",
  site_hits: 0
)

question_2 = Question.create!(
  asker_id: user_2.id,
  title: "Why is it called console.log?  why not console.print",
  body: "Just a thought",
  tag: "DEMO",
  site_hits: 0
)

question_3 = Question.create!(
  asker_id: user_3.id,
  title: "Is Ringo Starr the best Beatle?",
  body: "The guy could really swing em",
  tag: "DEMO",
  site_hits: 0
)

question_4 = Question.create!(
  asker_id: User.first.id,  
  title: "Are The Kinks better than the Beatles?",
  body: "It's hard to say",
  tag: "DEMO",
  site_hits: 0
)

question_5 = Question.create!(
  asker_id: User.second.id,  
  title: "What happened at the end of the Sopranos?",
  body: "DID TONY DIE?? WHY DID IT END OUT OF NOWHERE?",
  tag: "DEMO",
  site_hits: 0
)

question_6 = Question.create!(
  asker_id: User.first.id,  
  title: "Will shakhtar ever win the world cup?",
  body: "idk anything about soccer. is that a real thing?",
  tag: "DEMO",
  site_hits: 0
)
  
question_7 = Question.create!(
  asker_id: User.second.id,  
  title: "I cant wait for this project to finally look good (assuming that ever happens)",
  body: "Body bodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybodybody",
  tag: "DEMO",
  site_hits: 0
)
        
question_8 = Question.create!(
  asker_id: User.first.id,  
  title: "I'm doing console.log in ruby but it won't work!! alvin said something about printing but I did not understand ",
  body: "I was trying to console.log my cat's name and nothing happened",
  tag: "DEMO",
  site_hits: 0
)

question_9 = Question.create!(
  asker_id: user_9.id,  
  title: "Are Mozilla docs reliable??!!?!?!?",
  body: "I mean who uses Firefox anymore?!?!?!",
  tag: "DEMO",
  site_hits: 0
)
              
question_10 = Question.create!(
  asker_id: user_10.id,
  title: "how do i console log in css",
  body: "it's annoying, bc when I try to flex something it screws up the entire page!!  How do I see what it's doing.",
  tag: "DEMO",
  site_hits: 0
)

question_11 = Question.create!(
  asker_id: user_11.id,
  title: "I'm asking a long question to show off the great CSS styling I've achieved",
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
  answerer_id: user_2.id,
  question_id: question_1.id,
  body: "Do console.log('what you'd like to log') .... LOL noob!"
)
answer_2 = Answer.create!(
  answerer_id: user_2.id,
  question_id: question_1.id,
  body: "do p 'text' "
)
answer_3 = Answer.create!(
  answerer_id: user_7.id,
  question_id: question_8.id,
  body: "i have the same question"
)
answer_4 = Answer.create!(
  answerer_id: user_1.id,
  question_id: question_1.id,
  body: "Thank you!! you are so kind!"
)
answer_5 = Answer.create!(
  answerer_id: user_5.id,
  question_id: question_7.id,
  body: "good luck!"
)
answer_6 = Answer.create!(
  answerer_id: user_8.id,
  question_id: question_4.id,
  body: "i dont get the question.  please re-phrase"
)
answer_7 = Answer.create!(
  answerer_id: user_5.id,
  question_id: question_6.id,
  body: "i hope so"
)