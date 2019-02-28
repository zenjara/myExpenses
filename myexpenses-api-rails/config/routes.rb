Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    namespace :v1 do
      resources :expenses
      resources :expense_categories, only: %w[index create destroy]

      # User profile
      post 'register', to: 'users#register'
      post 'login', to: 'users#login'
      get 'me', to: 'users#profile'
      post 'daily_limit', to: 'users#set_daily_limit'
      post 'monthly_limit', to: 'users#set_monthly_limit'

      # Limit Metrics
      get 'metrics', to: 'metrics#expense_calculations'
    end
  end
end
