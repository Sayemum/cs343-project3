const apiKey = "5edb6047f7msh3b456d5178c2fefp1e7d64jsn00f08b160820"; // Replace with your actual API key

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
