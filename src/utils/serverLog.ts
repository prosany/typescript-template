import { config } from "@/configs";

const logs = (message: string): void => {
  console.log(message + ` on port ${config.port}`);
};

export default logs;
