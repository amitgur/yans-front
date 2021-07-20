# yans-front

## Description

Welcome to Yet Another Note Starter, or YANS for short. This handles the front end of the YANS project template.

## Pre-Startup

1. This note starter uses and requires Node.js, Vue.js, and Quasar. For the smoothest experience make sure you have them downloaded.

   - Node.js - https://nodejs.org/en/download/
   - Vue.js - https://vuejs.org/v2/guide/installation.html
   - Quasar - https://quasar.dev/start/quasar-cli

2. To download contents use:

   git clone https://github.com/amitgur/yans-front

3. The file will clone as a git repository so to remove the link to this repo use:

   rm -rf .git

4. It is good practice to keep `.env` files from being shared across git repo's so to prevent your personal .env file from getting pushed uncomment the .env line from the `.gitignore` file.

# Startup

To run the project first download the node_modules packages with:

    npm install

Then use one of the following to run it:

    npm start
    quasar dev

# Operation

## Linking to Backend

Linking relies on the `.env` file. The one that comes with the project is very basic, but should not be pushed for future projects. The `.env` file dictates the port numbers that your frontend and backend will communicate through so if you can't find it, create a new one and copy this starter text below:

    NODE_ENV=development
    PORT=5100
    SERVER_PORT=5101
    SERVER_PRODUCTION_URL=https://your.domain.com
    MAGIC_WORD=music

## Modifying Page Data

In the `src` folder `pages` contains the .vue files that should be modified for your application. For more information on Vue's project hierarchy visit https://vuejs.org/v2/guide/

## Features

- Login/Signup
- Navbar Menu Component
- Page routing/navigation
