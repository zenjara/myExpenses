class ExpenseSerializer < ActiveModel::Serializer
	attributes :id, :amount, :date, :description, :currency, :expense_category_id
end
