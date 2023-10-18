import fs from "fs";
import path from "path";

type PackageJson = {
  name: string;
  version: string;
  description: string;
  author: string;
  license: string;
};

const getServerInfo = (): PackageJson => {
  const packageJsonPath = path.join(__dirname, "../../package.json");
  const packageJson = fs.readFileSync(packageJsonPath, "utf-8");
  const packageData: PackageJson = JSON.parse(packageJson);
  const serverInfo: PackageJson = {
    name: packageData.name,
    version: packageData.version,
    description: packageData.description,
    author: packageData.author,
    license: packageData.license,
  };
  return serverInfo;
};

export default getServerInfo;
