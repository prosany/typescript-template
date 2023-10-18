import cors from "cors";
import express from "express";
import { app, server } from "@/utils/createServer";
import { config } from "@/configs";
import logs from "@/utils/serverLog";
import errorHandler, { notFound } from "@/middleware/error.handler";

// routes
import rootRoutes from "@/routes/root.routes";

app.use(cors());
app.use(express.json());

// routes
app.use("/", rootRoutes);

// error handler
app.use(notFound);
app.use(errorHandler);

server.listen(config.port, () => logs(`Server is Running`));
