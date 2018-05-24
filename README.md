# Appt Demo
This tutorial will guide you through a demo project building using **Appt Framework.** The source code, of course, is kept at this same repository. So, feel free to clone and improve it, if you wish! Also, although in this tutorial we're using only javascript, you can easily write your own a TypeScript version.

We assume you got here after seeing the [Appt's Main Page](https://github.com/brab0/appt). If you don't, **we strongly recommend** you to step back an take a 5 minutes reading to get used with some key concepts we're going to apply here.

## What we'll build
In this tutorial we will cover some Appt's concepts through the building of a **REST Api** for a **Contacts** application. The main endpoints for *search, create, update and delete* a contact, must require authentication and the grant to access them, must be done by an admin's invitation, who must sign in to do them.

## Requirements
To overcome some starter steps and make your life easier, we're gonna use `@appt/cli`, which counts with an assistant to setup your initial configurations. But feel free to set it up by your self if you wish.

Appt use some **ES7 features,** which are not implemented by the latest versions of node yet. That means to run Appt you must to use a compiler (*we're going with babel*) and configure your project to `transform-decorators-legacy`. 

We also gonna need a **MongoDB** running to persist our data, which we recommend you to use under a **Docker** container (*that's what we're gonna do*).

## Getting Started
### Installing @appt/cli
    $ npm install -g @appt/cli

### Usage
    $ appt init

<iframe width="100%" height="400" src="https://www.youtube.com/embed/05583QPXGLg?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
