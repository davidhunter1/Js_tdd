const axios = require("axios");

async function getContent(type) {
  if (type == "weather") {
    const response = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather?q=Montreal,CA&APPID=a27bb5871e902329b461ed459799f8dc&units=metric"
    );
    console.log(response.data["main"]["temp"]);
    return response.data["main"]["temp"];
  } else if (type == "fact") {
    const response = await axios.get(
      "https://uselessfacts.jsph.pl/random.json?language=en"
    );
    console.log(typeof response);
    return response.data["text"];
  }
}
module.exports = getContent;

