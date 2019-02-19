class Api::V1::ExpenseCategoriesController < ApplicationController

  def create
    @expense_category = @current_user.expense_categories.new(name: params[:name])
    if @expense_category.save
      render status: 201, json: @expense_category
    else
      render status: 400, json: { "errors" => @expense_category.errors }
    end
  end

  def index
    render status: 200, json: @current_user.expense_categories
  end

  def destroy
    @expense_category = ExpenseCategory.find_by_id(params[:id])
    if @expense_category
      @expense_category.destroy
      render status: 204
    else
      render status: 400, json: { 'errors' => "No expense category found with ID #{params[:id]}" }
    end
  end

end
