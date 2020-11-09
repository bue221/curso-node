const fs = require("fs");

try {
  const file = process.argv[2];

  const content = fs.readFileSync(file).toString();

  const line = content.split("\n").length;
  console.log(line);
} catch (err) {
  return console.log(err);
}
