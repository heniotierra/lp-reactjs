import app from "./server";
import { getEnv } from "./utils/getEnv";

const port = getEnv("PORT");

app()
  .then((appServer) => {
    appServer.listen(port, () => {
      console.log(`Application started on port ${port}`);
    });
  })
  .catch((err) => {
    throw Error(`Failed, to start application ${err}`);
  });