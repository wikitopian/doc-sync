import fs from "fs";
import DocSync from "#DocSync";

const start = fs.readFileSync("./test/docStart.txt", "utf8");
const final = fs.readFileSync("./test/docFinal.txt", "utf8");

console.log("START", start, "START");

const patch = DocSync.getPatch(start, final);

console.log("patch: \n", patch);

const patched = DocSync.setPatch(start, patch);

console.log("PATCHED", patched, "PATCHED");

const defects = DocSync.getPatch(final, patched);

console.log("defects:\n", defects);
