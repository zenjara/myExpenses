class DailyLimit < ApplicationRecord
  belongs_to :user
  validates :amount, :currency, presence: true
end
