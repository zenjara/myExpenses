class Expense < ApplicationRecord
  belongs_to :user
  belongs_to :expense_category

  validates :amount, :date, :expense_category, presence: true
end
