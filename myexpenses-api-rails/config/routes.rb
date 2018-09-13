Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	post 'api/v1/register', to: 'users#register'
	post 'api/v1/login', to: 'users#login'
end
