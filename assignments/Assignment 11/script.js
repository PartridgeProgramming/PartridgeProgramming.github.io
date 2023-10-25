const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let movieSection = document.getElementById("movies-section");

    movies.forEach((movie) => {
        movieSection.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    let section = document.createElement("section");
    let span = document.createElement("span");
    const URL = "https://portiaportia.github.io/json/";
    
    let img = document.createElement("img");
    img.src = URL + movie.img;
    img.width = 250;
    img.height = 250;
    section.append(img);
    
    let h3 = document.createElement("h3");
    h3.innerText = movie.title;
    span.append(h3);
    section.append(span);
  
    let p = document.createElement("p");
    span.append(p);
    p.innerHTML = `<b>Director: </b> ${movie.director}`;
    p.innerHTML += `<br><b>Actors: </b> ${movie.actors}`;
    p.innerHTML += `<br><b>Year: </b> ${movie.year}`;
    p.innerHTML += `<br><b>Genres: </b> ${movie.genres}`;
    p.innerHTML += `<br><b>Description: </b> ${movie.description}`;
    section.append(span);

    section.classList.add("flex-container");
    return section;
};

window.onload = () => showMovies();