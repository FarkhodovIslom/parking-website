const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/parkedCars.json");
const data = fs.readFileSync(filePath, "utf8");
let cars = JSON.parse(data); 

const pageController = {

    index: (req, res) => {
        res.render('index');
    },

    getCars: (req, res) => {
        res.render('carList', {cars});  
    }, 

    getCarById: (req, res) => {
        const carId = parseInt(req.params.id);

        const car = cars.find(car => car.id === carId);

        if (!car) {
            return res.status(404).send("Id topilmadi");
        }

        res.render("carDetails", {car});
    },

    postNewCar: (req, res) => {
        try {
            const newCar = {
                id: cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 1,
                number: req.body.car_number,
                owner: req.body.car_owner, 
                model: req.body.car_model,
                parkedAt: new Date().toISOString(),

            }
            cars.push(newCar);
            fs.writeFileSync(filePath, JSON.stringify(cars));
            res.redirect('/cars');
        } catch (error) {
            console.error("Xatolik manashuyerda ->", error);
            res.status(500).send("Error error!");
        }
    },

    deleteCar: (req, res) => {
        try { 
            const carId = parseInt(req.params.id);

            const carIndex = cars.findIndex(car => car.id === carId);

            if (carIndex === -1) {
                return res.status(404).send("Bu ID dagi moshina topilmadi");
            }

            cars.splice(carIndex, 1);

            cars = cars.map((car, index) => ({
                ...car,
                id: index + 1
            })); 

            fs.writeFileSync(filePath, JSON.stringify(cars)); 
            res.status(200).send("Car deleted successfully"); 
        } catch (err) {
            console.error("Xatolik manashuyerda ->", err);
            res.status(500).send("Error error!");  
        }
    }
}

module.exports = pageController;
