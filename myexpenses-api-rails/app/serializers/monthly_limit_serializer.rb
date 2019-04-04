class MonthlyLimitSerializer < ActiveModel::Serializer
  attributes :amount, :currency
end
