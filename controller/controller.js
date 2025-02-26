const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/parkedCars.json");
const data = fs.readFileSync(filePath, "utf8");
const cars = JSON.parse(data);


const pageController = {
    index: (req, res) => {
        res.render('index');
    },
    getCars: (req, res) => {
        res.render('carList', {cars});  
    }, 
    postNewCar: (req, res) => {
        const newCar = {
            id: cars.length + 1,
            number: req.body.car_number,
            owner: req.body.car_owner,
            model: req.body.car_model,
            parkedAt: 2025,
        }
        cars.push(newCar);
        fs.writeFileSync(filePath, JSON.stringify(cars));
        res.redirect('/cars')
    }
}

module.exports = pageController;