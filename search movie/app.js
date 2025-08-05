const apikey = "9f26a75c";
const GetMovieBtn = document.querySelector("#get-movie");
const movieList = document.querySelector("#movies-container");
const spinner = document.getElementById("spinner");

GetMovieBtn.addEventListener("click", async () => {
    // Display the movie poster, title, year, and type

    const searchInput = document.querySelector("#searchInput").value;
    const url = `https://www.omdbapi.com/?apikey=${apikey}&s=${searchInput}`;

    movieList.innerHTML = "";
    spinner.style.display = "block";

    
    try{
    let response = await fetch(url);
    let movieData = await response.json();


    let moviesArray = movieData.Search;
    for(movies of moviesArray){
        let MoviePoster = `${movies.Poster}`;
        let movieTitle = `${movies.Title}`;
        let ReleasYear = `${movies.Year}`;
        let MovieType = `${movies.Type}`;

        let divCard = document.createElement("div");
        divCard.classList.add("movie-card");
        divCard.innerHTML = `
        <img src="${MoviePoster}" alt="Movie Poster Image">
        <h3>${movieTitle}</h3>
        <p>${ReleasYear}</p>
        <p>${MovieType}</p>
        `
        movieList.append(divCard);
    }
    }
    catch(error){
        movieList.innerHTML = `
        <p>Movie Not Found</p>
        `
    }
    finally {
            spinner.style.display = "none";
      }

    console.log(movieData);

})