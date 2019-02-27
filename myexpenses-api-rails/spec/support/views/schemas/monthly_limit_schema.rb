MonthlyLimitSchema = Dry::Validation.Schema do
  required(:amount).filled(:float?)
  required(:currency).filled(:str?)
end
