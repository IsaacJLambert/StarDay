"use strict";

document.getElementById("dateSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
      return;
    console.log(value);
    const url = `https://api.nasa.gov/planetary/apod?api_key=kUZxRExxvi15Q8T3ydciSOTQNu6ZOKg8Pzbbyx2z&date=${value}`;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let returnedStarInfo = "";
        console.log(json);
        returnedStarInfo += `<h2>${value}</h2>`;
        returnedStarInfo += `<img src="${json.url}">`;
        returnedStarInfo += `<h2>${json.title}</h2><br>`;
        returnedStarInfo += `<h4>Copyright: ${json.copyright}</h4><br>`;
        returnedStarInfo += `<p>${json.explanation}</p>`;
        document.getElementById("dateResults").innerHTML = returnedStarInfo;
      });
  });
