import { errorResponse } from "@/utils/response";
import { ErrorRequestHandler, RequestHandler } from "express";

export const notFound: RequestHandler = (_req, res) => {
  return errorResponse(res, {
    status: 404,
    message: "Requested URL is not found",
  });
};

const errorHandler: ErrorRequestHandler = (err: Error, _req, res, next) => {
  return errorResponse(res, {
    status: 500,
    message: err.message || "Internal server error!",
  });
};

export default errorHandler;
