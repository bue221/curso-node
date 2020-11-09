const { Readable } = require("stream");

const ReadableStream = Readable({
  read(size) {
    setTimeout(() => {
      if (this.currentCharCode > 90) {
        this.push(null);
        return;
      }
      this.push(String.fromCharCode(this.currentCharCode++));
    }, 100);
  },
});

ReadableStream.currentCharCode = 65;
ReadableStream.pipe(process.stdout);
