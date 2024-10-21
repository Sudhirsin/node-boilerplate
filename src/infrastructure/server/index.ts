import express from "express";
import expressServer from "./express";

export default function createServer() {
  const app: express.Application = expressServer();

  app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port: ", process.env.PORT || 3000);
  });
}
