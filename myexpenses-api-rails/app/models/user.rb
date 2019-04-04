class User < ApplicationRecord
  has_many :expense_categories, dependent: :destroy
  has_many :expenses, dependent: :destroy
  has_one :daily_limit, dependent: :destroy
  has_one :monthly_limit, dependent: :destroy

  validates :name, :email, :password_digest, presence: true
  validates :email, uniqueness: true

  after_create :create_limits

  # encrypt password
  has_secure_password

  def create_limits
    daily_limit = build_daily_limit(amount: 0, currency: 'HRK')
    monthly_limit = build_monthly_limit(amount: 0, currency: 'HRK')
    daily_limit.save
    monthly_limit.save
  end
end
