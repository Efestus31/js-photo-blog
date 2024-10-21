const polaroidEl = document.getElementById('polar');
//dichiaro  la costante polaroidEL prendendo l'id all' interno del documento

//Funzione per recuperare i dati dall'API
const fetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
        .then(response => {
            const photos = response.data;
            displayPhotos(photos);
        })
        .catch(error => {
            console.error('Errore recuperando le foto', error);
        });
}

function upFirstLetter(str){
    return str.split(' ').map(word =>word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function displayPhotos(photos) {
 polaroidEl.innerHTML = '';

 const photoDivs = photos.map(photo => {
    const capTitle = upFirstLetter(photo.title);
    return `
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 pos-rel ">
                <img  class="pin" src="./assets/img/pin.svg" alt="pin">
                <figure class="polaroid" onclick="showOverlay('${photo.url}')">
                    <img src="${photo.url}" alt="${photo.title}">
                    <figcaption class="pt-5 edu-tas-beginner-fig-caption figcaption">${capTitle}</figcaption>
                </figure>
                
                
        </div>
    `;
}).join('');

polaroidEl.innerHTML = photoDivs;
}

fetchData();

function showOverlay(imageUrl) {
    const overlay = document.getElementById('custom-overlay');
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.src = imageUrl; 
    overlay.style.display = 'flex';
} 

function toggleOverlay(show) {
    const overlay = document.getElementById('custom-overlay');
    if (show) {
        overlay.style.display = 'flex';
    } else {
        overlay.style.display = 'none';
    }
}
