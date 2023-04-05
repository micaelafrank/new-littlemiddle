class Api::SaleDatesController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :cant_find_date
rescue_from ActiveRecord::RecordInvalid, with: :date_invalid

    def show 
        date = SaleDate.find(params[:id])
        render json: date
    end

    private 

    def cant_find_date
        render json: {error: "There is no sale matching the date provided."}, status: :no_content 
    end

    def date_invalid
        render json: { errors: invalid.records.errors.full_messages }, status: :unprocessable_entity
    end

end