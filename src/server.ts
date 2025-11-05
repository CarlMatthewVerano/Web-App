import "reflect-metadata";
// const express = require("express");

import { ValidateEnv } from "#utils/validateEnv.js";
import { App } from "#app/app.js";
import { routes } from "#src/routes.js";

ValidateEnv();

const app = new App(routes);
app.listen();
