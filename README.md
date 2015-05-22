# [umad-website-2015](http://utcsmad.github.io/umad-website-2015)

The source for the uMAD website, 2015. See it [live](http://utcsmad.github.io/umad-website-2015). 

# Running

Clone the repository and install [Middleman](https://middlemanapp.com)

Install any missing gems:

````bash
$ bundle install
````

Then run:

````bash
$ bundle exec middleman server
````
from the root of the repository.

# Deploying

````bash
$ bundle exec middleman build # generates static files
$ bundle exec middleman deploy # pushes to the `gh-pages` branch by default
````
