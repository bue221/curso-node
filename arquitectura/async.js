const promise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello error"));
      }
    }, 500);
  });

const prueba = async () => {
  try {
    const msg = await promise();
    console.log("Mensaje", msg);
  } catch (err) {
    console.log("error", err);
  }
};

prueba();
