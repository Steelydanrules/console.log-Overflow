Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] do 
      resources :questions, only: [:index]
      resources :answers, only: [:index]
    end

    resources :search, only: [:index]
    resources :votes, only: [:create]


    resources :answers, only: [:show, :create, :update, :destroy]
    
    resource :session, only: [:create, :destroy, :show]
    resources :questions, only: [:index, :show, :create, :update, :destroy] do 
      resources :answers, only: [:index]
      resources :votes, only: [:index]
    end 
  end

  root "static_pages#root"
  
end
