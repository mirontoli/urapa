# Chuvash keyboard layout for web

Urapa ([/uraba/](http://en.wikipedia.org/wiki/Chuvash_language)) is a light-weight javascript library for writing Chuvash in mobiles and beyond. 

This is a little mockup of the Urapa web application:

![Urapa mockup](assets/urapa-001.jpg)

### Building and developing

To build the project you must have nodejs, grunt, and npm.

```
npm install
grunt build
```

Alternatively, if you want to run it locally with a dev server.

```
grunt server
```
This will give you a livereload functionality where you can update the source code and see the changes directly in your browser without needing to reload the page.

### Hosting

The web apps is hosted on [Github Pages](https://help.github.com/articles/what-are-github-pages)

### Deploying

The web app is deployed with the git command [subtree](https://gist.github.com/cobyism/4730490).
```sh
git subtree push --prefix dist origin gh-pages
```

Before you do it for the first time, make sure you don't have a branch gh-pages.