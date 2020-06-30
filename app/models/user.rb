class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :questions,
  foreign_key: :asker_id,
  class_name: :Question

  has_many :answers_to_questions,
  through: :questions,
  source: :answers

  has_many :questions_answered,
  foreign_key: :answerer_id,
  class_name: :Answer

  has_many :votes,
  foreign_key: :liker_id,
  class_name: :Vote

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?

    if user && user.is_password?(password)
      user
    else
      nil
    end 

  end

  def reset_session_token!
    self.update!(session_token: User.generate_session_token)
    self.session_token
  end

  def is_password?(password)
    to_check = BCrypt::Password.new(self.password_digest)
    to_check.is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private
  
  def ensure_session_token
    self.session_token ||= User.generate_session_token 
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end 

end