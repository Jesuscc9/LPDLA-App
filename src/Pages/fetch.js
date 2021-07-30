fetch(
  "https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/QUIQO?api_key=RGAPI-f945f1f8-4c31-49cf-ac46-4100d9940659"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
