require 'test_helper'

class UserTest < ActiveSupport::TestCase
  test 'create new user' do
    user = User.new(name: 'test user', email: 'test@test.com', password: 'test')
    assert user.save
  end

  test 'create new user without name' do
    user = User.new(email: 'test@test.com', password: 'test')
    assert_not user.save
  end

  test 'create new user without email' do
    user = User.new(name: 'test', password: 'test')
    assert_not user.save
  end

  test 'create new user without password' do
    user = User.new(name: 'test', email: 'test@test.com')
    assert_not user.save
  end

  test 'user email should be unique' do
    user = User.new(name: 'test user', email: 'test@test.com', password: 'test')
    assert user.save
    another_user = User.new(name: 'test user another', email: 'test@test.com', password: 'test2')
    assert_not another_user.save
  end
end
