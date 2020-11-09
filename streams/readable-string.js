const { Readable } = require("stream");

const ReadableStream = Readable();

ReadableStream.push(`${0 / 0} `.repeat(10).concat("batman, batman !!"));
ReadableStream.push(null);

ReadableStream.pipe(process.stdout);
