class Api::UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]
    rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :user_invalid

    def index
        users = User.all.order(id: :desc)
        render json: users 
    end 


    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :firstName, :lastName, :email, :phone, :is_admin)
    end

    def user_not_found(e)
        render json: { errors: e.message}, status: :no_content
    end

    def user_invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

end
