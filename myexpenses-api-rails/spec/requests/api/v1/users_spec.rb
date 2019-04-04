require 'rails_helper'

RSpec.describe 'Users API', type: :request do
  it 'successfully registers a user' do
    register_with('John Doe', 'jdoe@doe.com', 'password')

    expect(response).to be_created
    expect(json_body['message']).to eq('User created successfully')
  end

  it 'fails to register a user with already taken email' do
    register_with('John Doe', 'jdoe@doe.com', 'password')

    expect(response).to be_created
    expect(json_body['message']).to eq('User created successfully')

    register_with('Jean Doe', 'jdoe@doe.com', 'password_another')

    expect(response).to be_bad_request
    expect(json_body['email']).to eq(['has already been taken'])
  end

  it 'logs a user in' do
    register_with('John Doe', 'jdoe@doe.com', 'password')
    login_with('jdoe@doe.com', 'password')

    expect(response).to be_ok
    expect(json_body['token']).to be_present
    expect(json_body['message']).to eq('Login Successful')
  end

  it 'does not log a user in if params are wrong' do
    register_with('John Doe', 'jdoe@doe.com', 'password')
    login_with('jdoe1@doe.com', 'password')

    expect(response).to be_unauthorized
    expect(json_body['error']['user_authentication']).to eq(['Invalid credentials'])
  end

  it 'is possible for user to see his own account information' do
    user = create :user
    get '/api/v1/me', headers: authorization_header(user)

    expect(response).to be_ok
    expect(response).to match_schema(LoggedUserSchema)
  end

  it 'successfully sets a daily limit' do
    user = create :user
    daily_limit_param = { amount: 100 }
    post '/api/v1/daily_limit', params: daily_limit_param, headers: authorization_header(user)

    expect(response).to be_created
    expect(response).to match_schema(DailyLimitSchema)
  end

  it 'does not set a daily limit without amount provided' do
    user = create :user
    post '/api/v1/daily_limit', params: {}, headers: authorization_header(user)

    expect(response).to be_bad_request
    expect(json_body['errors']['amount']).to eq(["can't be blank"])
  end

  it 'successfully sets a monthly limit' do
    user = create :user
    monthly_limit_param = { amount: 100 }
    post '/api/v1/monthly_limit', params: monthly_limit_param, headers: authorization_header(user)

    expect(response).to be_created
    expect(response).to match_schema(MonthlyLimitSchema)
  end

  it 'does not set a monthly limit without amount provided' do
    user = create :user
    post '/api/v1/monthly_limit', params: {}, headers: authorization_header(user)

    expect(response).to be_bad_request
    expect(json_body['errors']['amount']).to eq(["can't be blank"])
  end
end
