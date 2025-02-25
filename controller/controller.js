const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/parkedCars.json");
const data = fs.readFileSync(filePath, "utf8");
const cars = JSON.parse(data);

console.log(cars);

const pageController = {
    index: (req, res) => {
        res.render('index');
    },
    getCars: (req, res) => {
        res.render('carList', {cars});  
    }
}

module.exports = pageController;