ExpenseSchema = Dry::Validation.Schema do
  required(:id).filled(:int?)
  required(:amount).filled(:float?)
  required(:date).filled(:str?)
  required(:currency).filled(:str?)
  required(:expense_category_id).filled(:int?)
  required(:description)
end

ExpensesSchema = Dry::Validation.Schema do
  each do
    schema do
      ExpenseSchema
    end
  end
end
