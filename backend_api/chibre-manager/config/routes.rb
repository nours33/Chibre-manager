# Crée les différentes routes (URL) pour pouvoir faire des requêtes API dessus
Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :announces, only: [:index, :destroy]
      resources :games, only: [:index, :create, :show, :update, :destroy]
      resources :teams, only: [:index, :create]
      resources :players, only: [:index, :create]
      resources :player_announces, only: [:index, :create]
    end
  end
end
