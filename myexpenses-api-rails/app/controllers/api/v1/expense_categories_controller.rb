class Api::V1::ExpenseCategoriesController < ApplicationController
  def create
    @expense_category = @current_user.expense_categories.new(name: params[:name])
    if @expense_category.save
      render status: :created, json: @expense_category
    else
      render status: :bad_request, json: { 'errors' => @expense_category.errors }
    end
  end

  def index
    render status: :ok, json: @current_user.expense_categories
  end

  def destroy
    @expense_category = ExpenseCategory.find_by(id: params[:id])
    if @expense_category
      @expense_category.destroy
      render status: :no_content
    else
      render status: :bad_request, json: { 'errors' => "No expense category found with ID #{params[:id]}" }
    end
  end
end
