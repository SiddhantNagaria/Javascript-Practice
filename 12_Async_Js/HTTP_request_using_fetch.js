let url = "https://api.github.com/users";

// let res = fetch(url);

// res
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("Error = ", err);
//   });

async function getUrl() {
  try {
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
  } catch (e) {
    console.log("Error = ", e);
  }
}

getUrl();
