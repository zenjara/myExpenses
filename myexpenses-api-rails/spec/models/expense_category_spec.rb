require 'rails_helper'

RSpec.describe ExpenseCategory, type: :model do
  it "is valid with valid attributes" do
    user = build_stubbed :user
    expect(ExpenseCategory.new(user: user, name: 'Food')).to be_valid
  end

  it "is not valid without an user" do
    expect(ExpenseCategory.new(name: 'Food')).to_not be_valid
  end

  it "is not valid without an name" do
    user = build_stubbed :user
    expect(ExpenseCategory.new(user: user)).to_not be_valid
  end
end
