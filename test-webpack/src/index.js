import * as bootstrap from "bootstrap";
import css from "./style.scss";
import { run } from "./app/app.js";
import { AlertService } from "./app/services/alert.service.js";
import { CalculatorService } from "./app/services/calculator.service.js";
import { JokesService } from "./app/services/jokes.service.js";

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);
