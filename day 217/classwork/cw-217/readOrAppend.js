const fs = require("fs");

const userArg = process.argv[2];

try {
  const data = fs.readFileSync("userText.txt", "utf8");


  if (!data.trim()) {
    fs.writeFileSync("userText.txt", "Empty()\n");
    console.log("bruh, file was empty.... 'Empty()' added");
  } else {
    console.log("info in file:", data);
  }

  if (userArg === "continue") {
    fs.appendFileSync("userText.txt", "This is a continued line.\n");
    console.log("added new line, bc it was passed this arg: 'continue'");
  }

} catch (err) {
  fs.writeFileSync("userText.txt", "Empty()\n");
  console.log("faili ar arsebobda.... sheiqmna axali (romelic wesit shen unda geqna)");

  if (userArg === "continue") {
    fs.appendFileSync("userText.txt", "This is a continued line.\n");
    console.log("added new line");
  }
}
