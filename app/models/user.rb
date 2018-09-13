class User < ApplicationRecord
	has_many :expenses
	has_one :daily_limit
	has_one :monthly_limit

	validates_presence_of :name, :email, :password_digest
	validates :email, uniqueness: true

	#encrypt password
	has_secure_password
end
