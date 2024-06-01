import DocSync from "#DocSync";

const first = "Hello,\nWord!";
const final = "Hello,\nWorld!";

console.log(DocSync.getPatch(first, final));
