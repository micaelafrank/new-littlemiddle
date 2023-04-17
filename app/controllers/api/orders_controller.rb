class Api::OrdersController < ApplicationController

    #GET (all orders) "/api/orders"
    def index
        orders = Order.all.order(id: :desc)
        render json: orders 
    end

    #GET (all of a specific user's orders) "/api/orders/:user_id" (search by user id)

    #GET a specific order "/api/orders/:id" (search by order id)
    def show
        order = Order.find(params[:id])
        render json: order
    end

    def create
        new_order = Order.create!(order_params)
        render json: new_order, status: :created 
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end

    private

    def order_params
        params.permit(:id, :firstName, :lastName, :email, :phone, :choc_challah_count, :plain_challah_count, :donation)
    end
    

end