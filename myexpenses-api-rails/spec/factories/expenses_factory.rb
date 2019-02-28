FactoryBot.define do
  factory :expense do
    amount { Faker::Commerce.price }
    date { Faker::Date.backward(14) }
    description { Faker::Lorem.words(rand(2..10)).join(' ') }
    currency { 'HRK' }
    expense_category
    user
  end
end
