require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module HeloRailsReact
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins 'http://localhost:3001' or 'http://localhost:3000'# or '*' to allow any origin
        resource '/api/v1/*', headers: :any, methods: [:get, :post, :put, :patch, :delete, :options]
      end
    end
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")
  end
end
