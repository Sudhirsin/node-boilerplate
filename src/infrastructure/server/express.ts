import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const createExpressServer = (): express.Application => {
  const app: express.Application = express();

  app.use(cors());
  app.use(bodyParser.json());

  return app;
};

export default createExpressServer;
export { express };
