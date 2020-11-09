const { error } = require("console");
const fs = require("fs");

const out = fs.createWriteStream("./out.log");
const err = fs.createWriteStream("./err.log");

const consolefile = new console.Console(out, err);

setInterval(() => {
  consolefile.log(new Date());
  consolefile.error(new Error("Oppps"));
}, 2000);
