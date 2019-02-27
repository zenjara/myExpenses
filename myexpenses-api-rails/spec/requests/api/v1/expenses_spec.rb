require 'rails_helper'

RSpec.describe "Expenses API", :type => :request do
  it 'successfully creates a new expense' do
    expense_category = create :expense_category
    expense_param = {
      amount: 500,
      date: '10/01/2019',
      description: 'birthday party',
      currency: 'HRK',
      expense_category_id: expense_category.id,
    }
    post '/api/v1/expenses', params: expense_param, headers: authorization_header(expense_category.user)

    expect(response).to be_created
    expect(response).to match_schema(ExpenseSchema)
  end

  it 'does not create a new expense without all of the necessary arguments' do
    user = create :user
    post '/api/v1/expenses', params: {}, headers: authorization_header(user)

    expect(response).to be_bad_request
    expect(json_body['errors']['expense_category']).to eq(["must exist", "can't be blank"])
    expect(json_body['errors']['amount']).to eq(["can't be blank"])
    expect(json_body['errors']['date']).to eq(["can't be blank"])
  end

  it 'lists all of the users expenses' do
    expense = create :expense
    get '/api/v1/expenses', headers: authorization_header(expense.user)

    expect(response).to be_ok
    expect(json_body).to be_an_instance_of(Array)
    expect(response).to match_schema(ExpensesSchema)
  end

  it 'successfully deletes expense' do
    expense = create :expense
    expect(Expense.all.size).to eq(1)
    delete "/api/v1/expenses/#{expense.id}", headers: authorization_header(expense.user)

    expect(response).to be_no_content
    expect(Expense.all.size).to eq(0)
  end

  it 'successfully updates expense' do
    expense = create :expense
    expense_param = {
      amount: 500,
      date: '10/01/2019',
      description: 'birthday party',
    }

    expect(Expense.first.amount).not_to eq(expense_param[:amount])
    expect(Expense.first.date).not_to eq(expense_param[:date])
    expect(Expense.first.description).not_to eq(expense_param[:description])
    put "/api/v1/expenses/#{expense.id}", params: expense_param, headers: authorization_header(expense.user)

    expect(response).to be_ok
    expect(Expense.first.amount).to eq(expense_param[:amount])
    expect(Expense.first.date).to eq(expense_param[:date])
    expect(Expense.first.description).to eq(expense_param[:description])
  end

end
