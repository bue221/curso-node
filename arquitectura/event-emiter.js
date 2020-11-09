const EventEmiter = require("events");

class Logger extends EventEmiter {
  execute(cb) {
    console.log("before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("after");
  }
}

const logger = new Logger();

logger.on("start", () => {
  console.log("starting");
});

logger.on("finish", () => {
  console.log("finishing");
});

logger.execute(() => console.log("Hola mundo"));
