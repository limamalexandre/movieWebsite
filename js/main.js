const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
};

fetch('https://imdb8.p.rapidapi.com/title/v2/find?title=game&titleType=movie&limit=10&sortArg=alpha%2Casc', options)
    .then(response => response.json())
    .then(response => {
        const list = response.results;

        list.map((item => {
            const title = item.title;
            const poster = item.image.url;
            const movie = `<li><img src="${poster}"> <h2>${title}</h2></li>`;
            document.querySelector('.movies').innerHTML += movie;
        }))
    })
    .catch(err => console.error(err));