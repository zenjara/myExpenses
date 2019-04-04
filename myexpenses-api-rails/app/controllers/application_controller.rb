class ApplicationController < ActionController::API
  before_action :authenticate_request, :set_default_format
  attr_reader :current_user

  private

  def authenticate_request
    @current_user = AuthorizeApiRequest.call(request.headers).result

    render json: @current_user, status: :unauthorized unless @current_user.instance_of? User
  end

  def set_default_format
    request.format = :json
  end
end
