function displayGameProfile(game) {
    // Add code to display game profile information (title, release year, etc.)
    // in the "gameProfile" div.
  }
  
  function displayGameImages(images) {
    // Add code to display game images in the "gameImages" div.
  }
  
  function displayGameNews(news) {
    // Add code to display game news articles in the "gameNews" div.
  }
  
  document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();
  
    if (query) {
      // Search for video games using the RAWG API
      const results = await searchVideoGames(query);
      const game = results[0]; // Display the first result, or implement code to let the user choose from multiple results
  
      // Display game profile information
      displayGameProfile(game);
  
      // Search for game images using the Web Search API
      const images = await searchGameImages(query);
      displayGameImages(images);
  
      // Search for game news using the Web Search API
      const news = await searchGameNews(query);
      displayGameNews(news);
    }
  });
  