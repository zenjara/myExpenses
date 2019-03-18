class Api::V1::MetricsController < ApplicationController
  def expense_calculations
    metrics = {}
    metrics['dailyLimit'] = @current_user.daily_limit.amount unless @current_user.daily_limit.nil?
    metrics['monthlyLimit'] = @current_user.monthly_limit.amount unless @current_user.monthly_limit.nil?
    metrics['dailyExpenses'] = Expense.for_today(@current_user).pluck('amount').compact.sum
    metrics['monthlyExpenses'] = Expense.this_month(@current_user).pluck('amount').compact.sum

    metrics['expense_categories'] = {}
    @current_user.expense_categories.each do |category|
      metrics['expense_categories'][category.name] = Expense.this_month_for_category(@current_user,category).pluck('amount').compact.sum
    end

    render status: :ok, json: metrics
  end
end
