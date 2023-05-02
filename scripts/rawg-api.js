const apiKey = "c5ffe1f1b9cf4c75b41365e7f3ad5278"; // Replace with your actual API key

async function searchVideoGames(query) {
  const url = new URL("https://rawg-video-games-database.p.rapidapi.com/games");
  url.searchParams.append("search", query);
  
  const response = await fetch(url, {
    headers: {
      "X-RapidAPI-Host": "rawg-video-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": apiKey
    }
  });

  if (!response.ok) {
    throw new Error("Error fetching video game data");
  }

  const data = await response.json();
  return data.results;
}
