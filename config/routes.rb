Rails.application.routes.draw do
  devise_for :users
  # get 'lists/index'
  root to: "lists#index"
  resources :lists do
    collection do
      get 'search'
    end
  end
  resources :users, only: :show
end
