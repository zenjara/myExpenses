class ApplicationController < ActionController::API
  before_action :authenticate_request
  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result

    render json: @current_user, status: 401 unless @current_user.instance_of? User
  end
end
