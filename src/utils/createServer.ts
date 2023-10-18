import express, { Express } from "express";
import { createServer } from "http";

// app initialization
export const app: Express = express();

// create server
export const server = createServer(app);
