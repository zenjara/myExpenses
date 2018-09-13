class User < ApplicationRecord
	has_many :expenses
	has_one :daily_limit
	has_one :monthly_limit
end
