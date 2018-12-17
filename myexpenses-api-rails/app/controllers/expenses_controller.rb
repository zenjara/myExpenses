class ExpensesController < ApplicationController

  def index
    render status: 200, json: @current_user.expenses
  end

  def show
    @expense = @current_user.expenses.find_by_id(params[:id])
    if @expense
      render status: 200, json: @expense
    else
      render status: 400, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  def create
    @expenses = @current_user.expenses.new(expense_params)
    if @expenses.save
      render status: 201, json: @expenses
    else
      render status: 400, json: { "errors" => @expenses.errors }
    end
  end

  def update
    @expense = @current_user.expenses.find_by_id(params[:id])
    if @expense
      @expense.update_attributes(expense_params)
      render status: 200, json: @expense
    else
      render status: 400, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  def destroy
    @expense = @current_user.expenses.find_by_id(params[:id])
    if @expense
      @expense.destroy
      render status: 204
    else
      render status: 400, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  private

  def expense_params
    params.permit(
      :amount,
      :currency,
      :description,
      :expense_category_id,
      :date
    )
  end

end
