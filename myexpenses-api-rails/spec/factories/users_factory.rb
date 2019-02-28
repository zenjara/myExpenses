FactoryBot.define do
  sequence :email do |n|
    "person#{n}@example.com"
  end

  factory :user do
    name { 'John Doe' }
    email { generate(:email) }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
