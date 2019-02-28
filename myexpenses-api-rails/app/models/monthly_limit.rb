class MonthlyLimit < ApplicationRecord
  belongs_to :user
  validates :amount, :currency, presence: true
end
