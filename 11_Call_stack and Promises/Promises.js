function savetoDb(data) {
  //resolve and reject
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 5) {
      resolve("success: data was saved");
      // resolve(console.log(("success: data was saved")));
    } else {
      reject("error: failed to save data");
      // reject(console.log(("failure: data was not saved")));
    }
  });
}

savetoDb("Siddhant Nagaria")
  //then and catch
  .then(() => {
    console.log("data was saved");
  })
  .catch(() => {
    console.log("data was not saved");
  });

//promise chaining
savetoDb("Siddhant Nagaria")
  .then((result) => {
    console.log("data was saved");
    console.log(result);
    return savetoDb("my name is siddhant");
  })
  .then((result) => {
    console.log("data2 was saved");
    console.log(result);
    return savetoDb("I am a software engineer");
  })
  .then((result) => {
    console.log("data3 was saved");
    console.log(result);
  })
  .catch((error) => {
    console.log("data was not saved");
    console.log(error);
  });

///callback hell color problem solution using promises

let h1 = document.querySelector("h1");

function changecolor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, delay);
  });
}

changecolor("red", 1000)
  .then(() => {
    return changecolor("blue", 1000);
  })
  .then(() => {
    return changecolor("green", 1000);
  })
  .then(() => {
    return changecolor("yellow", 1000);
  })
  .then(() => {
    return changecolor("orange", 1000);
  })
  .then(() => {
    return changecolor("purple", 1000);
  });
