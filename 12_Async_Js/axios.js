const axios = require("axios");
const url = "https://api.github.com/users/octocat/repos";
async function getUrl() {
  try {
    let result = await axios.get(url);
    console.log(result.data);
  } catch (e) {
    console.log("Error = ", e);
  }
}
getUrl();