function searchFilm() {
const query = document.getElementById("movie-search-box").value;
    const url = `https://api.tvmaze.com/search/shows?q=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        const results = jsonData.map((element) => element.show.name);
        listResults(results);
      });
      document.getElementById("movie-search-box").value="";
    }
  function listResults(results) {
    const list = document.getElementById("search-list");
    list.innerHTML = "";
    results.forEach((result) => {
      const element = document.createElement("p");
      element.style.color="white";
      element.innerText = result;
      list.appendChild(element);
    });
  }
  function displayResults(results) {
    const grid = document.getElementById("result-grid");
    grid.innerHTML = "";
    results.forEach((movie) => {
      const card = createCard(movie);
      grid.appendChild(card);
    });
  }
  window.onload = () => {
    const searchFieldElement = document.getElementById("search-button");
    searchFieldElement.addEventListener("click", function (e) {
      
        
        searchFilm();
    
    })}







