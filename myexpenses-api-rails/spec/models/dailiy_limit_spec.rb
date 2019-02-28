require 'rails_helper'

RSpec.describe DailyLimit, type: :model do
  it 'is valid with valid attributes' do
    user = build_stubbed :user
    expect(DailyLimit.new(user: user, amount: 500, currency: 'HRK')).to be_valid
  end

  it 'is not valid without an user' do
    expect(DailyLimit.new(amount: 500, currency: 'HRK')).to_not be_valid
  end

  it 'is not valid without an amount' do
    user = build_stubbed :user
    expect(DailyLimit.new(user: user, currency: 'HRK')).to_not be_valid
  end

  it 'is not valid without currency' do
    user = build_stubbed :user
    expect(DailyLimit.new(user: user, amount: 500)).to_not be_valid
  end
end
