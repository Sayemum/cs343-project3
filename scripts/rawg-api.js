async function searchVideoGame(query) {
    const url = `https://rawg-video-games-database.p.rapidapi.com/games/${query}?key=0feab229ce0740da806c681148c00d60`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5edb6047f7msh3b456d5178c2fefp1e7d64jsn00f08b160820',
            'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const gameInfoTable = await response.json();
        console.log(gameInfoTable);
        console.log(gameInfoTable.name);
        displayGameProfile(gameInfoTable);
    } catch (error) {
        console.error(error);
    }
}
