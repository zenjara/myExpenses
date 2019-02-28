require 'rails_helper'

RSpec.describe Expense, type: :model do
  it 'is valid with valid attributes' do
    user = build_stubbed :user
    expense_category = build_stubbed :expense_category
    expect(Expense.new(user: user, description: 'Burger and fries', amount: 200, currency: 'HRK', date: Date.today, expense_category: expense_category)).to be_valid
  end

  it 'is not valid without an user' do
    expense_category = build_stubbed :expense_category
    expect(Expense.new(description: 'Burger and fries', amount: 200, currency: 'HRK', date: Date.today, expense_category: expense_category)).to_not be_valid
  end

  it 'is not valid without a date' do
    user = build_stubbed :user
    expense_category = build_stubbed :expense_category
    expect(Expense.new(user: user, description: 'Burger and fries', amount: 200, currency: 'HRK', expense_category: expense_category)).to_not be_valid
  end

  it 'is not valid without an amount' do
    user = build_stubbed :user
    expense_category = build_stubbed :expense_category
    expect(Expense.new(user: user, description: 'Burger and fries', currency: 'HRK', date: Date.today, expense_category: expense_category)).to_not be_valid
  end

  it 'is not valid without an expense category' do
    user = build_stubbed :user
    expect(Expense.new(user: user, description: 'Burger and fries', amount: 200, currency: 'HRK', date: Date.today)).to_not be_valid
  end
end
