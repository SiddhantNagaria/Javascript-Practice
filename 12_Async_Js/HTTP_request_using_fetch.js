let url = "https://api.github.com/users";

let res = fetch(url);

res
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error = ", error);
  });
