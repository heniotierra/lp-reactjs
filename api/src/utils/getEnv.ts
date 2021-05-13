import dotenv from "dotenv";
import * as fs from "fs";

export const getEnv = (name: string, allowEmpty?: boolean): string => {
  let defaultVars: { [key: string]: string } = {};
  const defaultPath = ".env";
  const localPath = ".env.local";

  if (fs.existsSync(defaultPath)) {
    defaultVars = dotenv.parse(fs.readFileSync(defaultPath));
  }

  if (fs.existsSync(localPath)) {
    defaultVars = dotenv.parse(fs.readFileSync(localPath));
  }

  if (!allowEmpty && !process.env[name] && !defaultVars[name]) {
    throw new Error(`Attempted to use undefined environment variable ${name}`);
  }

  return process.env[name] || defaultVars[name] || "";
};
