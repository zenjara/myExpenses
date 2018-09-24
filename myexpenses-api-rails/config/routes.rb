Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	# User profile
	post 'api/v1/register', to: 'users#register'
	post 'api/v1/login', to: 'users#login'
	get 'api/v1/me', to: 'users#profile'
	post 'api/v1/daily_limit', to: 'users#set_daily_limit'
	post 'api/v1/monthly_limit', to: 'users#set_monthly_limit'

	# Expsense category
	post 'api/v1/expense_categories', to: 'expense_categories#create'
	get 'api/v1/expense_categories', to: 'expense_categories#index'

	# Expense
	get 'api/v1/expenses', to: 'expenses#index'
	get 'api/v1/expenses/:id', to: 'expenses#show'
	post 'api/v1/expenses', to: 'expenses#create'
	put 'api/v1/expenses/:id', to: 'expenses#update'
	delete 'api/v1/expenses/:id', to: 'expenses#destroy'

	# Limit Metrics
	get 'api/v1/metrics', to: 'metrics#expense_calculations'

end
