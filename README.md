"start": "nodemon app.js", // starts the node server using Node Express. Automatically restarts upon saving using to "nodemon"
"dev": "Vite" // starts a Vite dev instance which can automatically reload browser upon saving 

NodeJS Express is being used as the backend of this project and can be ran via npm start (package.json)
Vite is being used as the frontend serving tools which can automatically refresh the browser. It can be ran via npm run dev.

When you are happy with the 'dev' version, you can use the 'build' script to create a 'dist' (distributable) which applies the styles to the production version (NodeJS express / npm start). 