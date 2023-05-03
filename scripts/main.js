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

  // Initial console message on start up
  console.warn("VISITOR NOTE: YOUR SEARCH NEEDS TO BE EXACT!!! READ THE report.html FOR MORE DETAILS!");
  console.warn("Here are some search options you can try: ");
  const allVideoGameTestTitles = `resident-evil-4-2023
  the-legend-of-zelda-breath-of-the-wild-sequel
  super-mario-64-1996
  minecraft
  super-mario-galaxy
  batman-arkham-city-2
  persona-5
  the-legend-of-zelda-a-link-to-the-past
  shin-megami-tensei-persona-4
  stardew-valley
  metroid-dread
  super-smash-bros-ultimate
  phoenix-wright-ace-attorney-2001
  splatoon-3
  yakuza-0
  god-of-war-iii
  the-legend-of-zelda-ocarina-of-time
  elden-ring
  metal-gear-solid-3-snake-eater
  grand-theft-auto-v
  the-last-of-us
  the-witcher-3-wild-hunt`
  console.warn(allVideoGameTestTitles);