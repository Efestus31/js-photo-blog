const polaroidEl = document.getElementById('polar');
//dichiaro  la costante polaroidEL prendendo l'id all' interno del documento
 
//Funzione per recuperare i dati dall'API
const fetchData = () => {
   axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
   .then(response => {
    const photos = response.data;
    displyPhotos(photos);
   })
   .catch(error => {
    console.error('Errore recuperando le foto', error);
   });
}

