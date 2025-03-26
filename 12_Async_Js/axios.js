const axios = require("axios");
const url = "https://api.github.com/users/octocat/repos";
async function getUrl() {
  try {
    const config = {
        headers: {Accept:"application/json"}
    }
    let result = await axios.get(url, config);
    console.log(result.data);
  } catch (e) {
    console.log("Error = ", e);
  }
}
getUrl();