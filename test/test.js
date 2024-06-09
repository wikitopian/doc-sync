import fs from "fs";
import DocSync from "#DocSync";

const start = fs.readFileSync("./test/docStart.txt", "utf8");
const final = fs.readFileSync("./test/docFinal.txt", "utf8");

const patch = DocSync.getPatch(start, final);

console.log("patch", patch);

const patched = DocSync.setPatch(start, patch);

console.log("patched", patched);
