module AuthHelpers

  def json_headers
    { 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' }
  end

  def authorization_header(user)
    token = user.present? ? JsonWebToken.encode(user_id: user.id) : ''
    { 'Authorization': "Bearer #{token}" }
  end

  def register_with(name, email, password)
    user_params = {
      name: name,
      email: email,
      password: password,
    }

    headers = json_headers
    post '/api/v1/register', params: user_params.to_json, headers: headers
  end

  def login_with(email, password)
    login_params = {
      email: email,
      password: password,
    }

    headers = json_headers
    post '/api/v1/login', params: login_params.to_json, headers: headers
  end
end
