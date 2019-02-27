FactoryBot.define do
  factory :expense_category do
    name { Faker::Commerce.department }
    user
  end
end
