Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :posts, only: [:index, :create, :destroy, :show, :update]
    resources :comments, only: [:index, :create, :destroy, :update]
    resources :friends, only: [:index, :create, :destroy] #, :show]
  end

  root 'static_pages#root'

end
