Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

    namespace :api do
      # resources :users, only: [:create, :show, :index, :update, :destroy] 
      # resources :saved_items, only: [:index, :show]
    end
  # Defines the root path route ("/")
  # root "articles#index"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
