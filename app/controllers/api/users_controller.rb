class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        user = User.create!(user_params)
        if user then
            Cart.create!(user_id: user.id)
        end
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :firstName, :lastName, :email, :phone, :is_admin)
    end

end
