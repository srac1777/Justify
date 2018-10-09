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
        @purchases = Purchase.all
    end

    def show
        @purchase = Purchase.find(params[:id])
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