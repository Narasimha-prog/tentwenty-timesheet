import { existsSync } from "fs";
import { execSync } from "child_process";

const srcPath = "dist/apps/backend/src";

if (existsSync(srcPath)) {
  console.log("Flattening src folder into dist/apps/backend...");
  execSync(`mv ${srcPath}/* dist/apps/backend/`, { stdio: "inherit" });
  execSync(`rm -r ${srcPath}`, { stdio: "inherit" });
  console.log("Flattening completed!");
} else {
  console.log("No src folder to flatten.");
}