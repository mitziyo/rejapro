// ========= KHAN

console.log("Hello MIT");
const express = require("express");
const app = express();

// 1. Krish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ======= KHAN



// 2. session code


// ========= Kevin
// 3. views code
app.set("views", "views")
app.set("view engine", "ejs")
// ========= Kevin

// 4. routing code








// ========= Kevin
const port = 3000

app.get('/', (req, res) => {
    res.render("reja.ejs")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// localhost 300 portda ishga tushmoqda front-end
// ========= Kevin
