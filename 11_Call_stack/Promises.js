function savetoDb(data) {
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
  .then(() => {
    console.log("data was saved");
  })
  .catch(() => {
    console.log("data was not saved");
  });
  