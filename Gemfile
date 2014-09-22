source 'https://rubygems.org'

require 'json'
require 'open-uri'

versions = begin
  JSON.parse(open('https://pages.github.com/versions.json').read)
rescue SocketError
  require 'github-pages'; {'github-pages' => GitHubPages::VERSION}
end

gem 'github-pages', versions['github-pages']
gem 'redcarpet'
gem 'jekyll-sitemap'
gem 'jekyll-github-metadata'
