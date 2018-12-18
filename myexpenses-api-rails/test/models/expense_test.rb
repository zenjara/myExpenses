require 'test_helper'

class ExpenseTest < ActiveSupport::TestCase
  test "create new expense" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    expense_category = ExpenseCategory.create!(name: 'food', user: user)
    expense = Expense.new(amount: 100, date: Date.today, expense_category: expense_category, user: user)
    assert expense.save
  end

  test "create new expense without amount" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    expense_category = ExpenseCategory.create!(name: 'food', user: user)
    expense = Expense.new(date: Date.today, expense_category: expense_category, user: user)
    assert_not expense.save
  end

  test "create new expense without date" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    expense_category = ExpenseCategory.create!(name: 'food', user: user)
    expense = Expense.new(amount: 100, expense_category: expense_category, user: user)
    assert_not expense.save
  end

  test "create new expense without expense category" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    expense = Expense.new(amount: 100, date: Date.today, user: user)
    assert_not expense.save
  end

  test "create new expense without user" do
    expense_category = ExpenseCategory.create(name: 'food')
    expense = Expense.new(amount: 100, date: Date.today, expense_category: expense_category)
    assert_not expense.save
  end
end
