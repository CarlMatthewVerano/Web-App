import { App } from "#app/app";
// import { AuthRoute } from '#routes/user.routes';
import { UserRoute } from "#routes/user.routes";
import { ValidateEnv } from "#utils/validateEnv";

ValidateEnv();

const app = new App([new UserRoute()]);

app.listen();
