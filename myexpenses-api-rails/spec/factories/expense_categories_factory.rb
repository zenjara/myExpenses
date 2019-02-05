FactoryBot.define do
  factory :expense_category do
    name { "Food" }
    user

  #   factory :user do
  #     name { "John Doe" }
  #
  #     # user_with_posts will create post data after the user has been created
  #     factory :user_with_expense_categories do
  #       # posts_count is declared as a transient attribute and available in
  #       # attributes on the factory, as well as the callback via the evaluator
  #       transient do
  #         expense_categories_count { 5 }
  #       end
  #
  #       # the after(:create) yields two values; the user instance itself and the
  #       # evaluator, which stores all values from the factory, including transient
  #       # attributes; `create_list`'s second argument is the number of records
  #       # to create and we make sure the user is associated properly to the post
  #       after(:create) do |user, evaluator|
  #         create_list(:expense_category, evaluator.expense_categories_count, user: user)
  #       end
  #     end
  #   end
  end
end
