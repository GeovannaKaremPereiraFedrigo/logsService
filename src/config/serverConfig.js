import express from "express";
import { connectDB } from "./dbConfig.js";
import { seedFixedSystems } from "../scripts/create-fixed-systems.js";

const createServer = async () => {
  const app = express();

  await connectDB();

  // Garante que os sistemas fixos existam
  await seedFixedSystems();

  return app;
};

export default createServer;
