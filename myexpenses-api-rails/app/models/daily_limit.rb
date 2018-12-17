class DailyLimit < ApplicationRecord
  belongs_to :user
  validates_presence_of :amount, :currency

end
