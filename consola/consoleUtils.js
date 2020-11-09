/*console.log("Un %s y un %s", "perro", "gato");

console.info("Hello world");

console.warn("error");

console.assert(42 === "42");

console.trace("hello"); */

const { debug } = require("console");
const util = require("util");

const debuglog = util.debuglog("foo");

debuglog("hello from foo");
