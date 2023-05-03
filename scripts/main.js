function displayGameProfile(game) {
    // Add code to display game profile information (title, release year, etc.)
    // in the "gameProfile" div.
    const {name, description, background_image, metacritic, released} = game;
    const profileHTML = 
    `<div class="game-profile">
      <h2>${name}</h2>
      <img src="${background_image}" alt="${name}" style="width: 800px; height: auto;" />
      <p>${description}</p>
      <p>Metacritic Score: ${metacritic}</p>
      <p>Release Date: ${released}</p>
    </div>`;

    const gameProfileElem = document.getElementById("gameProfile");
    gameProfileElem.innerHTML = profileHTML;
  }
  
  function displayGameNews(articles) {
    // Add code to display game news articles in the "articles-container" div.
    const articlesContainer = document.getElementById('articles-container');
    articlesContainer.innerHTML = ''; // Clear any existing content

    // Check if no articles could be found
    if (!articles || articles.length === 0) {
        articlesContainer.innerHTML = '<p>No news articles found.</p>';
        return;
    }

    // Populate the articles
    const newsHTML = articles.map(article => 
        `<div class="news-article">
            <h3 class="article-title"><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <img src="${article.image.url}" alt="${article.title}" style="width: 400px; height: auto;" />
            <p>${article.description}</p>
            <p class="article-date">Published at: ${article.datePublished}</p>
            <p class="article-provider">Source: ${article.provider.name}</p>
        </div>`
    ).join('');

    articlesContainer.innerHTML = newsHTML;
  }

  function sortArticles(sortCriterion) {
    // Get the articles container
    const articlesContainer = document.getElementById('articles-container');

    // Get the individual articles
    const articles = Array.from(articlesContainer.children);

    // Sort the articles based on the selected option
    articles.sort((a, b) => {
        switch (sortCriterion) {
        case 'alphabetical':
            return a.querySelector('.article-title').innerText.localeCompare(b.querySelector('.article-title').innerText);
        case 'date':
            const dateA = a.querySelector('.article-date').innerText.replace('Published at: ', '');
            const dateB = b.querySelector('.article-date').innerText.replace('Published at: ', '');
            return new Date(dateB) - new Date(dateA);
        case 'provider':
            return a.querySelector('.article-provider').innerText.localeCompare(b.querySelector('.article-provider').innerText);
        default:
            return 0;
        }
    });

    // Re-append the sorted articles to the container
    articles.forEach((article) => {
        articlesContainer.appendChild(article);
    });
  }  
  
  document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const query = searchInput.value.trim();
  
    if (query) {
      // Search for video game using the RAWG API
      const gameInfoTable = await searchVideoGame(query);

      // Fetch game news using Web Search API
      const newsArticles = await searchGameNews(query);
    }
  });
  
  document.getElementById('sort-options').addEventListener('change', function () {
    sortArticles(this.value);
  });