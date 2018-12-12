class JsonWebToken
# our secret key to encode our jwt

	class << self
		def encode(payload, exp = 2.hours.from_now)
			# set token expiration time
			payload[:exp] = exp.to_i

			# this encodes the user data(payload) with our secret key
			JWT.encode(payload, Rails.application.secrets.secret_key_base)
		end

		def decode(token)
			#decodes the token to get user data (payload)
			return if token.nil?
			body = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
			HashWithIndifferentAccess.new body
		end

	end
end
