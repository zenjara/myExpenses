class AuthorizeApiRequest
	prepend SimpleCommand

	def initialize(headers = {})
		@headers = headers
	end

	def call
		user
	end

	private

		attr_reader :headers

		def user
			@user ||= User.find(decoded_auth_token[:user_id]) if decoded_auth_token
			@user || errors.add(:token, 'Invalid token') && nil
			@user || errors
		end

		def decoded_auth_token
			begin
				JsonWebToken.decode(http_auth_header)
			rescue StandardError => e
				errors.add(:token, e.message)
			end
		end

		def http_auth_header
			if headers['Authorization'].present?
				return headers['Authorization'].split(' ').last
			else
				errors.add(:token, 'Missing token')
			end
			nil
		end
end