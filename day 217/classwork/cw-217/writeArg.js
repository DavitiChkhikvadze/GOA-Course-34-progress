const fs = require("fs");

const userInput = process.argv[2];

if (!userInput) {
  console.log("sheiyvane biwo argumenti! magalitad node writeArg.js hi");
  process.exit();
}

fs.writeFileSync("userText.txt", userInput);

console.log("written in the damn file:", userInput);
