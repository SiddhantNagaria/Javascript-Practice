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
  .then((result)=>{
    console.log("data3 was saved");
    console.log(result);
  })
  .catch((error) => {
    console.log("data was not saved");
    console.log(error);
  });
