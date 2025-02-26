const express = require("express");
const dotenv = require("dotenv").config();
const router = require("./routes/router");
const ejs = require("ejs");
const path = require("path");

// Bu express js
const app = express();

// Bu yerda public folderni static qilib qoyamiz
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 
app.use(express.static(path.join(__dirname, 'public')));

// Form dagi datani o'qishi uchun middleware qo'shamiz 
app.use(express.urlencoded({ extended: true }));

// Bu yerda / ga zapros kelsa routerga yo'naltiramiz
app.use("/", router);


const PORT = process.env.PORT;
app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
}); 