class Api::V1::ExpensesController < ApplicationController
  before_action :set_expense, only: %i[show update destroy]

  def index
    render status: :ok, json: @current_user.expenses
  end

  def show
    if @expense
      render status: :ok, json: @expense
    else
      render status: :bad_request, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  def create
    @expenses = @current_user.expenses.new(expense_params)
    if @expenses.save
      render status: :created, json: @expenses
    else
      render status: :bad_request, json: { 'errors' => @expenses.errors }
    end
  end

  def update
    if @expense
      @expense.update(expense_params)
      render status: :ok, json: @expense
    else
      render status: :bad_request, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  def destroy
    if @expense
      @expense.destroy
      render status: :no_content
    else
      render status: :bad_request, json: { 'errors' => "No expense found with ID #{params[:id]}" }
    end
  end

  private

  def set_expense
    @expense = Expense.find_by(id: params[:id])
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
