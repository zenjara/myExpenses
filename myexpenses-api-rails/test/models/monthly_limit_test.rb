require 'test_helper'

class MonthlyLimitTest < ActiveSupport::TestCase
  test "create new monthly limit" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    monthly_limit = MonthlyLimit.new(amount: 200, currency: 'HRK', user: user)
    assert monthly_limit.save
  end

  test "create new monthly limit without amount" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    monthly_limit = MonthlyLimit.new(currency: 'HRK', user: user)
    assert_not monthly_limit.save
  end

  test "create new monthly limit without currency" do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    monthly_limit = MonthlyLimit.new(amount: 200, user: user)
    assert_not monthly_limit.save
  end

  test "create new monthly limit without user" do
    monthly_limit = MonthlyLimit.new(amount: 200, currency: 'HRK')
    assert_not monthly_limit.save
  end
end
