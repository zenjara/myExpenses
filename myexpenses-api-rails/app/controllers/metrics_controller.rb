class MetricsController < ApplicationController
  def expense_calculations
    beginning_of_month = Date.today.beginning_of_month
    beginning_of_next_month = beginning_of_month.next_month

    metrics = Hash.new
    metrics['dailyLimit'] = @current_user.daily_limit.amount
    metrics['monthlyLimit'] = @current_user.monthly_limit.amount
    metrics['dailyExpenses'] = Expense.where(:user_id => @current_user.id, :date => Time.zone.now.beginning_of_day..Time.zone.now.end_of_day).pluck('amount').compact.sum
    metrics['monthlyExpenses'] = Expense.where(:user_id => @current_user.id, :date => beginning_of_month..beginning_of_next_month).pluck('amount').compact.sum

    render status: 200, json: metrics
  end
end
