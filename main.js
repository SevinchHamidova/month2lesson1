const elTemplate = document.querySelector(".js-list-template").content;
const elList = document.querySelector(".movie-list");
console.log(elList);
  
  function myRenderMovies(moviesList, node) {
    const moviesFragment = document.createDocumentFragment();
    node.innerHTML = "";
    moviesList.forEach(function(kino) {
      const moviesItemClone =  elTemplate.cloneNode(true);
      moviesItemClone.querySelector(".movie-img").src = kino.poster;
      moviesItemClone.querySelector(".movie-img").alt = kino.title;
      moviesItemClone.querySelector(".movie-title").textContent = kino.title;
      moviesItemClone.querySelector(".movie-category").textContent = kino.genres;
      moviesItemClone.querySelector(".movie-time").textContent = kino.release_date;
      moviesItemClone.querySelector(".movie-about").textContent = kino.overview.substring(0, 100);
      
      moviesFragment.appendChild(moviesItemClone);
    });
    node.appendChild(moviesFragment);
  }
  myRenderMovies(films.slice(0, 12), elList);
 console.log(hourMin());