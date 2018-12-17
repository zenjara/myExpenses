class Expense < ApplicationRecord
  belongs_to :user
  belongs_to :expense_category

  validates_presence_of :amount, :date, :expense_category

end
