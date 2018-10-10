require 'date'

class Api::PurchasesController < ApplicationController
    def create
       @purchase = Purchase.new(purchases_params)

            if @purchase.save
                render :show
            else
                render json: @purchase.errors.full_messages, status: 422
            end
    
    end

    def update
        @purchase = current_user.purchases.find(params[:purchase][:id])

        if @purchase.update_attributes(purchases_params)
            render :show
        else
            render json: @purchase.errors.full_messages, status: 422
        end
    end

    def index
        @purchases = current_user.purchases
        @total_value = 0
        @values = []
        @purchases.each do |purchase|
            calculated_value = calculate_value(purchase)
            @values << calculated_value
            @total_value += calculated_value
        end

    end

    def calculate_value(purchase)
        (purchase.cost*1.0)/(Date.today - purchase.purchase_date + 1)
    end

    def show
        @purchase = current_user.purchases.find(params[:id])
        # debugger
        @value = calculate_value(@purchase)
    end

    def destroy
        @purchase = Purchase.find(params[:id])
        @purchase.destroy
        render :show
    end

    def purchases_params
        params.require(:purchase).permit(:name, :category_id, :user_id, :description, :purchase_date, :cost)
    end
end