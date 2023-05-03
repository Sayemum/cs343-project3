async function searchGameNews(query) {
    const url = `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=${query}&pageNumber=1&pageSize=5&autoCorrect=true&safeSearch=true&fromPublishedDate=null&toPublishedDate=null`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5edb6047f7msh3b456d5178c2fefp1e7d64jsn00f08b160820',
            'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Parse the response as JSON
        const articles = data.value; // Access the articles array
        console.log(articles);
        displayGameNews(articles);
    } catch (error) {
        console.error(error);
    }
}