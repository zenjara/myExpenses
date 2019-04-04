require 'rails_helper'

RSpec.describe 'Expense Categories API', type: :request do
  it 'successfully creates a new expense category' do
    user = create :user
    expense_category_param = { name: 'test category' }
    post '/api/v1/expense_categories', params: expense_category_param, headers: authorization_header(user)

    expect(response).to be_created
    expect(response).to match_schema(ExpenseCategorySchema)
  end

  it 'does not create a new expense category without a name' do
    user = create :user
    post '/api/v1/expense_categories', params: {}, headers: authorization_header(user)

    expect(response).to be_bad_request
    expect(json_body['errors']['name']).to eq(["can't be blank"])
  end

  it 'lists all of the users expense categories' do
    expense_category = create :expense_category
    get '/api/v1/expense_categories', headers: authorization_header(expense_category.user)

    expect(response).to be_ok
    expect(json_body).to be_an_instance_of(Array)
    expect(response).to match_schema(ExpenseCategoriesSchema)
  end

  it 'successfully deletes expense category' do
    expense_category = create :expense_category
    expect(ExpenseCategory.all.size).to eq(1)
    delete "/api/v1/expense_categories/#{expense_category.id}", headers: authorization_header(expense_category.user)

    expect(response).to be_no_content
    expect(ExpenseCategory.all.size).to eq(0)
  end
end
