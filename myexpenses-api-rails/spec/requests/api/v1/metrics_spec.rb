require 'rails_helper'

RSpec.describe "Metrics API", :type => :request do
  it 'returns correct metrics data' do
    expense_category = create :expense_category

    daily_limit_param = { amount: 100 }
    post '/api/v1/daily_limit', params: daily_limit_param, headers: authorization_header(expense_category.user)
    expect(response).to be_created

    monthly_limit_param = { amount: 5000 }
    post '/api/v1/monthly_limit', params: monthly_limit_param, headers: authorization_header(expense_category.user)
    expect(response).to be_created

    expense_today = {
      amount: 500,
      date: Date.today.strftime("%d/%m/%Y"),
      description: 'birthday party',
      currency: 'HRK',
      expense_category_id: expense_category.id,
    }
    post '/api/v1/expenses', params: expense_today, headers: authorization_header(expense_category.user)
    expect(response).to be_created


    get '/api/v1/metrics', headers: authorization_header(expense_category.user)
    expect(response).to be_ok
    expect(json_body['dailyLimit']).to eq(daily_limit_param[:amount])
    expect(json_body['monthlyLimit']).to eq(monthly_limit_param[:amount])
    expect(json_body['dailyExpenses']).to eq(expense_today[:amount])
    expect(json_body['monthlyExpenses']).to eq(expense_today[:amount])
  end

end
