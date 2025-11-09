import express from "express";
import type { Routes } from "./interfaces/routes.interface.js";
import { NODE_ENV, PORT } from "./config/index.js";

export class App {
    public app = express();
    public env: string;
    public port: string | number;

    constructor(routes: Routes[]) {
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 5000;
        this.initializeRoutes(routes);
    }

    // app.get("/", (req, res) => {
    //     res.send("Hello World!");
    // });

    public listen() {
        this.app.listen(this.port);
    }

    private initializeRoutes(routes: Routes[]) {
        routes.forEach((route) => {
            this.app.use("/", route.router);
        });
    }

    // private initializeErrorHandling() {
    //     this.app.use(ErrorMiddleware);
    //   }

    //   private async connectToDatabase() {
    //     await dbConnection();
    //   }
}
