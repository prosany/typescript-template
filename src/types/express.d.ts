declare global {
  namespace Express {
    interface Request {
      auth?: any;
      value?: Partial<
        Record<"body" | "query" | "params", Record<string, unknown>>
      >;
      files?: File | File[];
    }
  }
}
