import apicalypse from "apicalypse";

const rawQueryString = "fields a,b,c;limit 50;offset 0;";

// async/await
try {
  const response = await apicalypse(rawQueryString).request(
    "https://id.twitch.tv/oauth2/token?client_id=uu7afsm8howpv9fvrkpdnvv85hllc5&client_secret=f4na6hbecehj2rsfmmb5o7pe1wph0e&grant_type=client_credentials"
  );

  // This is an axios response: https://github.com/axios/axios#response-schema
  console.log(response.data);
} catch (err) {
  console.error(err);
}

// Promises
apicalypse(rawQueryString)
  .request("https://myapi.com/actors/nm0000216")
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.error(err);
  });
