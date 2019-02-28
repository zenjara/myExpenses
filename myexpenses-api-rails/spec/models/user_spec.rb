require 'rails_helper'

RSpec.describe User, type: :model do
  it 'is valid with valid attributes' do
    expect(User.new(name: 'John Doe', email: 'email@gmail.com', password: 'password', password_confirmation: 'password')).to be_valid
  end

  it 'is not valid without an email' do
    expect(User.new(name: 'John Doe', password: 'password', password_confirmation: 'password')).to_not be_valid
  end

  it 'is not valid without a name' do
    expect(User.new(email: 'email@gmail.com', password: 'password', password_confirmation: 'password')).to_not be_valid
  end

  it 'is not valid without a password credentials' do
    expect(User.new(name: 'John Doe', email: 'email@gmail.com')).to_not be_valid
  end
end
