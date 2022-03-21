const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const movieUrl = document.querySelector('.userInputPoster');
const movieYear = document.querySelector('.userInputYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');

if(titleInStorage && imageUrlInStorage && yearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(hsla(240, 58%, 85%, 0.249), rgba(230, 36, 36, 0.112)),
    url('${imageUrlInStorage}')`;
}


btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = movieUrl.value;
    let movieYearInput = movieYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(hsla(240, 58%, 85%, 0.249), rgba(230, 36, 36, 0.112)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    movieUrl.value = '';
    movieYear.value = '';
});