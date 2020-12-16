// console.log("hello.")
// 92e9db00ae974bb387e5fec32c488ab6

let newsAccordion = document.getElementById("newsAccordion");


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/top-headlines?token=.....&lang=en', true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newshtml="";
     articles.forEach(function(element,index) {
      
            // console.log(articles[item]);
            let news = `
            <div class="card-group">
            <div class="card bg-light mb-3"  >
            <img class="card-img-top" src="${element["image"]}" >
            <div class="card-body">
              <h5 class="card-title"><b>Breaking News ${index+1}: </b>${element["title"]}</h5>
              <p class="card-text">${element["content"]}</p>
              <a href="${element["url"]}" target="_blank" class="btn btn-outline-secondary"><b >Read More here</b></a>
            </div>
          </div>
          </div>`;
newshtml+=news;
        
    });
        newsAccordion.innerHTML=newshtml;
    }
    else {
        console.log("Wrong")
    }
}
xhr.send();

