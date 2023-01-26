const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a519ad9e6msh5734074ce93d0e0p199987jsn262adf298f6a',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

function popularByGenre(genre) {
    fetch(`https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${genre}&limit=8`, options)
	.then(response => response.json())
	.then(response => {
        for (i=0; i<5; i++) {
            let id = response[i];
            let tt = id.split('/')[2];

            fetch(`https://imdb8.p.rapidapi.com/title/find?q=${tt}`, options)
            .then(response => response.json())
            .then(data => { 
                let info = data.results[0];
                if(info.title.length > 22) {
                    let aux = info.title.slice(0,21) + '...';
                    info.title = aux;
                }
                let card = `<li class="item">
                                <div class="latest-box">
                                    <div class="latest-box-img">
                                        <img src="${info.image.url}" alt="top rated movie">
                                    </div>
                                    <div class="latest-box-text">
                                        <strong>${info.title}</strong>
                                        <p>${info.year}</p>
                                    </div>
                                </div>
                            </li>`; 
                document.getElementById('autoWidth').innerHTML += card; 
            })
            .catch(err => console.error(err)); 
        }
        setTimeout(() => {
            for (i=5; i<8; i++) {
                let id = response[i];
                let tt = id.split('/')[2];
    
                fetch(`https://imdb8.p.rapidapi.com/title/find?q=${tt}`, options)
                .then(response => response.json())
                .then(data => { 
                    let info = data.results[0];
                    if(info.title.length > 22) {
                        let aux = info.title.slice(0,21) + '...';
                        info.title = aux;
                    }
                    let card = `<li class="item">
                                    <div class="latest-box">
                                        <div class="latest-box-img">
                                            <img src="${info.image.url}" alt="top rated movie">
                                        </div>
                                        <div class="latest-box-text">
                                            <strong>${info.title}</strong>
                                            <p>${info.year}</p>
                                        </div>
                                    </div>
                                </li>`; 
                    document.getElementById('autoWidth').innerHTML += card; 
                })
                .catch(err => console.error(err)); 
            }
        }, 2000); 
    })
	.catch(err => console.error(err));
}

var myVar;

function loading() {
    myVar = setTimeout(showPage, 7000);
}
  
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}