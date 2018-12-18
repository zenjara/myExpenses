require 'test_helper'

class ExpenseCategoryTest < ActiveSupport::TestCase
  test "create new expense category" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    expense_category = ExpenseCategory.new(name: 'food', user: user)
    assert expense_category.save
  end

  test "create new expense category without name" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    expense_category = ExpenseCategory.new(user: user)
    assert_not expense_category.save
  end

  test "create new expense category without user" do
    expense_category = ExpenseCategory.new(name: 'food')
    assert_not expense_category.save
  end
end
