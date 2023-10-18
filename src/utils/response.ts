import { Response } from "express";

const response = (res: Response, data: any) => {
  res.status(200);
  res.json({
    status: "OK",
    message: "Your request was successfully processed",
    results: data,
  });
};

const errorResponse = (res: Response, data: any) => {
  res.status(data.status);
  delete data.status;
  res.json({
    status: "ERROR",
    message: "Your request was not successfully processed",
    results: data,
  });
};

export default response;
export { errorResponse };
