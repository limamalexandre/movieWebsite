const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7a519ad9e6msh5734074ce93d0e0p199987jsn262adf298f6a',
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