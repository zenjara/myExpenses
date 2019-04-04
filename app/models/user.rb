class User < ApplicationRecord
	has_many :expense_categories,  dependent: :destroy
	has_many :expenses, dependent: :destroy
	has_one :daily_limit, dependent: :destroy
	has_one :monthly_limit, dependent: :destroy

	validates_presence_of :name, :email, :password_digest
	validates :email, uniqueness: true

	#encrypt password
	has_secure_password
end
