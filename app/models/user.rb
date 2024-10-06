class User < ApplicationRecord

    attr_reader :password
    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, :first_name, :last_name, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    has_many :posts,
        foreign_key: :author_id,
        class_name: :Post
    
    has_many :likes,
        foreign_key: :author_id,
        class_name: :Like

    has_one_attached :profile_photo
    has_one_attached :cover_photo

    has_many :comments,
        foreign_key: :comment_author_id,
        class_name: :Comment

    def friends
        Friend
            .where("friends.user_id = ? OR friends.friend_id = ?", self.id, self.id)
    end

    def self.get_users(users_set)
        User
            .where(id: users_set)
            .includes(:profile_photo_attachment, :cover_photo_attachment, :cover_photo_blob, :profile_photo_blob) 
    end

    def potential_friends(max_count = 10)
        friend_ids = Friend.where("user_id = ? OR friend_id = ?", self.id, self.id)
                            .pluck(:user_id, :friend_id)
                            .flatten.uniq
                            .reject { |id| id == self.id } 
    
        potential_users = User.where.not(id: friend_ids).where.not(id: self.id)
                                .includes(:profile_photo_attachment, :profile_photo_blob) 
        
        potential_users.order(Arel.sql('RANDOM()')).limit(max_count)
    end

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


# a = User.select("users.*, friends.*").joins("INNER JOIN friends ON users.id = friends.friend_id OR users.id = friends.user_id")