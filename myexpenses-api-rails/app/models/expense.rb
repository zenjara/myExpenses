class Expense < ApplicationRecord
  belongs_to :user
  belongs_to :expense_category

  validates :amount, :date, :expense_category, presence: true

  scope :for_today, ->(user) { where(user_id: user, date: Time.zone.now.beginning_of_day..Time.zone.now.end_of_day) }
  scope :this_month, ->(user) { where(user_id: user, date: Date.today.beginning_of_month..Date.today.beginning_of_month.next_month) }
  scope :this_month_for_category, ->(user, category) { this_month(user).where(expense_category_id: category) }
end
