const fs = require("fs");

const files = fs.readdir(__dirname, (err, files) => {
  if (err) {
    return console.log(err);
  }

  console.log(files);
  var stdin = process.openStdin();

  stdin.addListener("data", function (d) {
    const file = d.toString();
    const valor = file.indexOf("\r\n");
    const path = valor ? file.slice(0, valor) : "No";
    console.log("archivo seleccionado: ", path);

    const content = fs.readFileSync(path).toString();

    console.log("Numero de lineas: ", content.split("\n").length);
  });
});
