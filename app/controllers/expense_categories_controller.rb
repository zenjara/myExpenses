class ExpenseCategoriesController < ApplicationController

	def create
		@expense_category = @current_user.expense_categories.new(name: params[:name])
		if @expense_category.save
			render status: 201, json: @expense_category
		else
			render status: 400, json: { "errors" => @expense_category.errors }
		end
	end

	def index
		render status:200 , json: @current_user.expense_categories
	end

end
