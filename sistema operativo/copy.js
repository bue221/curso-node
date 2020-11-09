const fs = require("fs");

fs.copyFile("naranja.txt", "limon.txt", (err) => {
  if (err) {
    console.log("Error");
  }
  console.log("Archivo copiado");
});
