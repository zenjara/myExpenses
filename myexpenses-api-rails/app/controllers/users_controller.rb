class UsersController < ApplicationController
  skip_before_action :authenticate_request, only: %i[login register]

  # POST /register
  def register
    @user = User.new(user_params)
    if @user.save
      response = { message: 'User created successfully' }
      render json: response, status: :created
    else
      render json: @user.errors, status: :bad
    end
  end

  def login
    authenticate params[:email], params[:password]
  end

  def profile
    @current_user

    render :json => @current_user
  end

  def set_daily_limit
    currency = params[:currency] ? params[:currency] : 'HRK'
    @daily_limit = @current_user.build_daily_limit(amount: params[:amount], currency: currency)
    if @daily_limit.save
      render status: 201, json: @daily_limit
    else
      render status: 400, json: { "errors" => @daily_limit.errors }
    end
  end

  def set_monthly_limit
    currency = params[:currency] ? params[:currency] : 'HRK'
    @monthly_limit = @current_user.build_monthly_limit(amount: params[:amount], currency: currency)
    if @monthly_limit.save
      render status: 201, json: @monthly_limit
    else
      render status: 400, json: { "errors" => @monthly_limit.errors }
    end
  end

  private

  def user_params
    params.permit(
      :name,
      :email,
      :password
    )
  end

  def authenticate(email, password)
    command = AuthenticateUser.call(email, password)

    if command.success?
      render json: {
        token: command.result,
        message: 'Login Successful'
      }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end
end
