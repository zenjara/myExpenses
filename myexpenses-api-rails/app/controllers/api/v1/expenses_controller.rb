class Api::V1::ExpensesController < ApplicationController
  before_action :set_expense, only: %i[show update destroy]

  def index
    render status: 200, json: @current_user.expenses
  end

  def show
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
    if @expense
      @expense.update_attributes(expense_params)
      render status: 200, json: @expense
    else
      render status: 400, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  def destroy
    if @expense
      @expense.destroy
      render status: 204
    else
      render status: 400, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  private

  def set_expense
    @expense = Expense.find_by_id(params[:id])
  end

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
