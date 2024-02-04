Sidekiq.configure_client do |config|
  config.redis = { url: ENV['REDIS_URL'] }
end

Sidekiq.configure_server do |config|
  config.redis = { url: ENV['REDIS_URL'] }
  config.logger = Sidekiq::Logger.new($stdout)
end