function savetoDb(data, success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 5) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "siddhant nagaria",
  () => {
    console.log("success: your data was saved");
    savetoDb(
      "my name is siddhant",
      () => {
        console.log("success2: your data2 was saved");
      },
      () => {
        console.log("failure2: your data2 was not saved");
      }
    );
  },
  () => {
    console.log("failure: unable to save data");
  }
);

//need of promises => to avoid callback hell and pyramid of doom problem 
//promises are used to handle asynchronous operations
//promises are used to handle errors in a better way
//promises are used to chain multiple asynchronous operations together
//promises are used to handle multiple asynchronous operations together
//promises are used to handle asynchronous operations in a more readable way