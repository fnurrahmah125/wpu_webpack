const run = require("./app/app");
const AlertService = require("./app/services/alert.service");
const CalculatorService = require("./app/services/calculator.service");
const JokesService = require("./app/services/jokes.service");

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);
