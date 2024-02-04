class PostLogsJob < ApplicationJob
  queue_as :default

  def perform(post)
    logger.info "*** PostLogsJob performed (title: #{post.title}, body: #{post.body}) ***"
  end
end