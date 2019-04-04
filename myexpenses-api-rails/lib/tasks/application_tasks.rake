desc 'Adds default daily and monthly limit to Users that have none'
task initialize_limits: :environment do
  User.all.each do |user|
    if user.daily_limit.nil?
      daily_limit = user.build_daily_limit(amount: 0, currency: 'HRK')
      daily_limit.save
    end

    if user.monthly_limit.nil?
      monthly_limit = user.build_monthly_limit(amount: 0, currency: 'HRK')
      monthly_limit.save
    end
  end
end
