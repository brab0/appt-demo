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
	
The video below shows the setup prompt to start an Appt Project. The @appt/cli basically pass through the following steps:
 - define your **root path**;
 - generate your **package.json**,**** asks for your entry point file and class, where is the main source path to compile and where to put the built files.
 - which **dependencies** your project depends on. `@appt/core` is always needed, so it's implicit. But you will be prompt to choose if you want `@appt/mongoose` and `@appt/api` as well. For this demo we're gonna need both;
 - You'll be asked if you want some **extra files** such .gitignore, README.md and a docker-compose.yml for a MongoDB container, which we also gonna need.
 - Finally, the cli will generate the files needed, install the project's dependencies, and give you a main module for the entry point application.

[![Watch the video](https://raw.githubusercontent.com/brab0/appt-demo/master/Screen%20Shot%202018-05-24%20at%2001.13.33.png)](https://www.youtube.com/embed/05583QPXGLg?rel=0&amp;showinfo=0)

## Contacts App
Now the project base for our application is ready, lets get to work!

First, lets remove the default generated log message from `MainModule` and create our database connector component called `ApiDatabase`:
```javascript
import { ApptComponent, TDatabase } from  '@appt/core';
import { Mongoose } from  '@appt/mongoose';

@ApptComponent({
	extend: {
		type:  TDatabase,
		use: [Mongoose],
		config: {
			uri:  'mongodb://localhost:27017/contacts'
		}
	}
})
export class ApiDatabase {
	constructor(config){
		console.log(`Database running at ${config.uri}...`)
	}
}
```
At this point, we have an entry point (`MainModule`) and a database component. We're gonna need a server as well. Lets create it!
```javascript
import { ApptComponent } from  '@appt/core';
import { TServer } from  '@appt/api';

@ApptComponent({
	extend: {
		type:  TServer
	}
})
export class ApiServer {
	constructor(config){
		console.log(`Server running at ${config.address.host}:${config.address.port}...`)
	}
}
```
By default, Appt set the basic server configuration to the *host* as `localhost` and *port* to `3000`, which for this demo it's fine. If you want to override them, take a look to the `@appt/api` docs.

Before execute our code, we need to make sure `MainModule` class is declaring their components, in this case: `ApiDatabase` and `ApiServer`:

```javascript
...
@ApptModule({
	declare: [
		'ApiDatabase',
		'ApiServer'
	]
})
export class MainModule {}
...
```

Now, if you execute `npm start` now, you should see the messages: 
`Database running at mongodb://localhost:27017/contacts`
`Server running at http://localhost:3000`
