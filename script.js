"use strict";

document.getElementById("dateSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
      return;
    const url = `https://api.nasa.gov/planetary/apod?api_key=kUZxRExxvi15Q8T3ydciSOTQNu6ZOKg8Pzbbyx2z&date=${value}`;
    fetch(url)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        let returnedStarInfo = "";
        if(json.code === 400) {
          returnedStarInfo += `<h2>${value} is an invalid input.</h2><br>
          <h2> Please verify the input is YYYY-MM-DD</h2><br>
          <h2>Make sure the date is after 1995-06-16</h2>`;
        }
        else if(json.media_type === "video") {
          returnedStarInfo += `<h2>${value}</h2>`;
          returnedStarInfo += `<div id="video"><iframe src="${json.url}" allow="fullscreen"></iframe></div>`
          returnedStarInfo += `<h2>${json.title}</h2><br>`;
          if (json.copyright !== undefined) {
            returnedStarInfo += `<h4>Copyright: ${json.copyright}</h4><br>`;
          }
          returnedStarInfo += `<p>${json.explanation}</p>`;
        }
        else {        
          console.log(json);
          returnedStarInfo += `<h2>${value}</h2>`;
          returnedStarInfo += `<img src="${json.url}">`;
          returnedStarInfo += `<h2>${json.title}</h2><br>`;
          if (json.copyright !== undefined) {
            returnedStarInfo += `<h4>Copyright: ${json.copyright}</h4><br>`;
          }
          returnedStarInfo += `<p>${json.explanation}</p>`;
        }
        document.getElementById("dateResults").innerHTML = returnedStarInfo;
      });
  });
