LoggedUserSchema = Dry::Validation.Schema do
  required(:id).filled(:int?)
  required(:name).filled(:str?)
  required(:email).filled(:str?)
  required(:daily_limit).schema do
    required(:amount).filled(:float?)
    required(:currency).filled(:str?)
  end
  required(:monthly_limit).schema do
    required(:amount).filled(:float?)
    required(:currency).filled(:str?)
  end
end
