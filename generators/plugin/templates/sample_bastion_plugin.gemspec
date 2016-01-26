$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "<%= nameSnake %>/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "<%= nameSnake %>"
  s.version     = <%= namePascal %>::VERSION
  s.authors     = ["thomasfmckay@gmail.com"]
  s.email       = ["foreman-dev@googlegroups.com"]
  s.homepage    = "http://theforeman.org"
  s.summary     = "<%= nameTitle %>"
  s.description = "<%= nameTitle %>"

  s.files = Dir["{app,config,lib}/**/*", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "bastion"
end
