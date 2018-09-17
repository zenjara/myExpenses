class UserSerializer < ActiveModel::Serializer
	attributes :id, :name, :email
	has_one :daily_limit
	has_one :monthly_limit
end
