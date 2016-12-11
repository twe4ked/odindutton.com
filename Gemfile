source 'https://rubygems.org'

require 'json'
require 'open-uri'

versions = begin
  JSON.parse(open('https://pages.github.com/versions.json').read)
rescue SocketError
  require 'github-pages'; {'github-pages' => GitHubPages::VERSION}
end

%w[
  github-pages
  jekyll-sitemap
].each do |name|
  gem name, versions.fetch(name)
end

gem 'jekyll-github-metadata'
