Rails.application.routes.draw do
  root to: "pages#home"
  resources :coaches
  devise_for :users
  get "/oferta", to: "pages#oferta"
  get "/personal", to: "pages#personal"
  get "/agreement", to: "pages#agreement"



  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
