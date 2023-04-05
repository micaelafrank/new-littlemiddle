class Api::OrdersController < ApplicationController

    def index
        orders = Order.all.order(id: :desc)
        render json: orders 
    end
end