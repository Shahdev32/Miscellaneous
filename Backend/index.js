const express = require("express");
const app = express();
const port = 8080;

// // Middleware to parse URL-encoded bodies (as sent by HTML forms)
// app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
  //  console.log(req.query); // Log the query parameters
    res.send("Standard GET response");
});
 
app.post("/register", (req, res) => {
    //console.log(req.body); // Log the body parameters
    res.send("Standard POST response");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
