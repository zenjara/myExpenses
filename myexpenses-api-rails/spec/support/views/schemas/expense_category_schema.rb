ExpenseCategorySchema = Dry::Validation.Schema do
  required(:id).filled(:int?)
  required(:name).filled(:str?)
  required(:created_at).filled(:str?)
end

ExpenseCategoriesSchema = Dry::Validation.Schema do
  each do
    schema do
      ExpenseCategorySchema
    end
  end
end
