import express from "express";
import type { Routes } from "./interfaces/routes.interface.js";
import { NODE_ENV, PORT } from "./config/index.js";

export class App {
    public app = express();
    public env: string;
    public port: string | number = 3000;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 3000;
    }

    // app.get("/", (req, res) => {
    //     res.send("Hello World!");
    // });

    public listen() {
        this.app.listen(this.port);
    }
}
