class CreateDailyLimits < ActiveRecord::Migration[5.0]
	def change
		create_table :daily_limits do |t|
			t.float :amount
			t.string :currency
			t.integer :user_id


			t.timestamps
		end
	end
end
