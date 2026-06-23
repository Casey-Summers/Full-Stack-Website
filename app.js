// Install dependencies
const express = require("express")
const path = require("path");

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    // res.send('Hello World!') // Sends simple text directly
    res.sendFile(path.join(__dirname, "src", "pages", "/index.html"));
});

app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
})