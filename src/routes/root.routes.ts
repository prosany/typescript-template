import { Router } from "express";
import getServerInfo from "@/utils/getServerInfo";
import response from "@/utils/response";

const router = Router();

router.get("/", (_req, res) => {
  res.send("<h3>Server is up and running</h3>");
});

router.get("/health", (_req, res) => {
  res.send("<h3>OK</h3>");
});

router.get("/info", (_req, res) => {
  res.status(200);
  return response(res, {
    uptime: process.uptime(),
    ...getServerInfo(),
  });
});

export default router;
