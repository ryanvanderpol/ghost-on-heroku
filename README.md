# [Ghost](https://github.com/TryGhost/Ghost) on [Heroku](http://heroku.com) with [S3 Image Uploads](http://aws.amazon.com/s3/)

Ghost is a free, open, simple blogging platform. Visit the project's website at <http://ghost.org>, or read the docs on <http://support.ghost.org>.

This is a modified fork of [Ghost on Heroku](https://github.com/cobyism/ghost-on-heroku) that adds S3 image uploads to Ghost by using pieces from [ghost-aws-s3](https://github.com/kimar/ghost-aws-s3).  Heroku app filesystems [aren’t meant for permanent storage](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem). 

To use this, you will need an Amazon AWS account, which [you can get for free](http://aws.amazon.com).  You should set up a public-read bucket on S3 where Ghost will upload your images.

## Deploying on Heroku

To get your own Ghost blog running on Heroku, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/ryanvanderpol/ghost-on-heroku)

Fill out the form, and you should be cooking with gas in a few seconds.

### Things you should know

- After deployment, visit the admin area at `YOURAPPNAME.herokuapp.com/ghost` to set up your blog.

- Your blog will be publicly accessible at `YOURAPPNAME.herokuapp.com`.

- To make changes to your Ghost blog (like adding a theme to the `/content` directory, for instance), clone your blog locally using the [Heroku Toolbelt](https://toolbelt.heroku.com/):


```sh
  heroku git:clone --app YOURAPPNAME
```

- Images will be uploaded to an AWS S3 bucket of your choosing, just follow the steps in the deploy form.

### How this works

This repository is essentially a minimal web application that specifies [Ghost as a dependency](https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-NPM-module), and makes a deploy button available.

## Problems?

If you have problems using your instance of Ghost, you should check the [official documentation](http://support.ghost.org/) or open an issue on [the official issue tracker](https://github.com/TryGhost/Ghost/issues). If you discover an issue with the deployment process provided by *this repository*, then [open an issue here](https://github.com/ryanvanderpol/ghost-on-heroku).

## License

Released under the [MIT license](./LICENSE), just like the Ghost project itself.
