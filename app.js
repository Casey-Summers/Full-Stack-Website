// Install dependencies
const express = require("express")
const path = require("path");

const app = express();
const port = 8080;

// Uses the compiled production frontend built by Vite (`npm run build') globally across all routes
app.use(express.static(path.join(__dirname, "dist")));

// Serves the Vite version of the front-end
// request -> response : if user requests "/" -> serve "dist/index.html"
app.get('/', (req, res) => {
    // res.send('Hello World!') // Sends simple text directly

    res.sendFile(path.join(__dirname, "dist", "/index.html")); // use "dist" explicitly as a backup
    // res.sendFile(path.join(__dirname, "src", "pages", "/index.html"));
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})