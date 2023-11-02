import css from "./style.scss";
import _ from "lodash";

import { run } from "./app/app.js";
import { AlertService } from "./app/services/alert.service.js";
import { CalculatorService } from "./app/services/calculator.service.js";
import { JokesService } from "./app/services/jokes.service.js";

const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();

run(alertService, calculatorService, jokesService);

const text = _.toUpper("Hello from index.js");
console.log(text);
