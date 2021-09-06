class User < ApplicationRecord

    attr_reader :password
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :fname, :lname, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user
            return (user.is_password?(password)) ? user : nil
        else
            return nil
        end
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(plaintext_password)
        bc_password = BCrypt::Password.new(self.password_digest)
        bc_password.is_password?(plaintext_password)
    end


    def reset_session_token!
        self.session_token = User.generate_session_token()
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= User.generate_session_token()
    end


end
