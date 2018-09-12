class CreateExpenses < ActiveRecord::Migration[5.0]
	def change
		create_table :expenses do |t|
			t.float :amount
			t.string :description
			t.string :currency
			t.integer :user_id
			t.integer :expense_category_id

			t.timestamps
		end
	end
end
