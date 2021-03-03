Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :announces, only: [:index]
      resources :games, only: [:index, :create]
      resources :teams, only: [:index, :create] do
        resources :players, only: [:index, :create]
      end
      resources :player_announces, only: [:index]
    end
  end
end
