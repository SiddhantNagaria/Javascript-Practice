function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      if (num <5) {
        reject("promise rejected");
      }
      console.log("num =", num);
      resolve("promise resolved");
    }, 1000);
  });
}

async function demo() {
  try {
    await getNum();
    await getNum();
    await getNum();
  } catch{
    console.log("error caught");
  }
}


demo();