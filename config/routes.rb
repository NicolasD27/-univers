Rails.application.routes.draw do
  devise_for :users
  namespace :api, defaults: { format: :json } do
	  namespace :v1 do
	    resources :projects, only: [:index, :create, :destroy] do
	    	resources :participations, only: :create
	      	resources :tasks, only: [ :index, :show, :create, :update, :destroy ] do
	      		resources :comments, only: [ :index, :show, :create, :destroy]
	     	 end
	    end
	  end
	end

	resources :projects, only: [ :show ]
	root to: 'projects#show'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
