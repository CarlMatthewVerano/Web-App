import express from "express";
import { NODE_ENV, PORT } from "./config/index.js";
export class App {
    app = express();
    env;
    port;
    constructor(routes){
        this.app = express();
        this.env = NODE_ENV || "development";
        this.port = PORT || 5000;
        this.initializeRoutes(routes);
    }
    // app.get("/", (req, res) => {
    //     res.send("Hello World!");
    // });
    listen() {
        this.app.listen(this.port);
    }
    initializeRoutes(routes) {
        routes.forEach((route)=>{
            this.app.use("/", route.router);
        });
    }
}

//# sourceMappingURL=app.js.map