import env from "dotenv";
import type { Config } from "@/types/config";
env.config({ path: ".env" });

export const config: Config = {
  port: process.env.PORT || 9898,
} as const;
