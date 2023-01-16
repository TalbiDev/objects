const titleElement = document.getElementById('title');
const extraNameElement = document.getElementById('extra-name');
const extraValueElement = document.getElementById('extra-value');
const filterTitle = document.getElementById('filter-title');
const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

let movies = [];
function renderMovies(filterMovies=movies){
    
    const movieList = document.getElementById('movie-list');
    if (movieList.lenght==0) {
        movieList.classList.remove('visible');
        return;
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML="";
    filterMovies.forEach(movie=>{
        const li = document.createElement('li');
        let text = movie.title + ' - ';
        for (key in movie.info){
            text += key + ': ' + movie.info[key]
        }
        li.innerText = text;
        movieList.append(li);
    })
}
function addMovie(){
    const title = titleElement.value;
    const extraName = extraNameElement.value;
    const extraValue = extraValueElement.value;
 
    if( !title || !extraName || !extraValue){
        console.log('input fields not valid!!'); return;}

    let newMovie = {
        title,
        info: {
            [extraName]:extraValue
        }
    }
    console.log('new movie added:', newMovie);
    movies.push(newMovie);
    renderMovies();

}

function searchMovie(){
 const searchValue = filterTitle.value;
 if (searchValue == "") return;
 let filterMovies = movies.filter(m=>{
    m.title.toLowerCase().includes(searchValue.toLowerCase());
 });
 console.log(filterMovies);
 //renderMovies(filterMovies)
}


addMovieBtn.addEventListener('click',addMovie);
searchBtn.addEventListener('click',searchMovie);

