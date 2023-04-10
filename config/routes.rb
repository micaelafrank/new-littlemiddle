Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :orders, only: [:index, :show, :create] 
    # resources :saved_items, only: [:index, :show]
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index, :update, :destroy] 
    
    get "/me", to: "users#show"
    get "/get-friday", to: "sale_dates#get_friday"
    post "/orders", to: "orders#create"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy" 
    post "/signup", to: "users#create"

  # Defines the root path route ("/")
  # root "articles#index"
  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
