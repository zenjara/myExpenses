require 'test_helper'

class DailyLimitTest < ActiveSupport::TestCase
  test 'create new daily limit' do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    daily_limit = DailyLimit.new(amount: 200, currency: 'HRK', user: user)
    assert daily_limit.save
  end

  test 'create new daily limit without amount' do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    daily_limit = DailyLimit.new(currency: 'HRK', user: user)
    assert_not daily_limit.save
  end

  test 'create new daily limit without currency' do
    user = User.create!(name: 'test user', email: 'test@test.com', password: 'test')
    daily_limit = DailyLimit.new(amount: 200, user: user)
    assert_not daily_limit.save
  end

  test 'create new daily limit without user' do
    daily_limit = DailyLimit.new(amount: 200, currency: 'HRK')
    assert_not daily_limit.save
  end
end
