class Api::ChocChipChallahsController < ApplicationController
    
    #GET /cc-flavor-orders 
    def index
        chocOrders = ChocChipChallah.all
        render json: chocOrders, except: [:created_at, :updated_at]
    end

    #GET /cc-flavor-orders/user-id 
    def show
        chocOrder = ChocChipChallah.find_by(user_id: @current_user.id)
        render json: userCart
    end 



end
