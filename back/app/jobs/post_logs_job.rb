class PostLogsJob < ApplicationJob
  queue_as :default

  def perform
    puts '*** PostLogsJob performed ***'
  end
end
