let news = [];
let menus = document.querySelectorAll(".menus button")
menus.forEach((menu) => menu.addEventListener("click",(event)=>getNewsByTopic(event) ))

let searchButton = document.getElementById("search-button");

let url;
const getNews = async() =>{
    let header = new Headers({'x-api-key':'YlQbM-qvSd7Rk04gjW7AI1I1ycTvB0WPbzFiS_mXzkg'});
    let response  = await fetch(url,{headers:header})
    let data = await response.json();
    news = data.articles;
    render();
}

const getLatestNews = async() =>{
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=sport&page_size=10`);  
    getNews();
}

const getNewsByTopic = async(event) =>{
    console.log("클릭됨",event.target.textContent)

    let topic = event.target.textContent.toLowerCase();
    url = new URL(`https://api.newscatcherapi.com/v2/latest_headlines?countries=KR&topic=${topic}&page_size=10`)
    getNews();
}

const getNewsByKeyword = async() =>{
    let keyword = document.getElementById("search-input").value;
    url = new URL(`https://api.newscatcherapi.com/v2/search?q=${keyword}&page_size=10`)
    getNews();
}

const render = () =>{
    let newsHTML = ''
    newsHTML = news.map((item)=>{
        return `<div class="row news">
        <div class="col-lg-4">
            <img class="news-img-size" src="${item.media}"alt="">
        </div>
        <div class="col-lg-8">
            <h2>${item.title}</h2>
            <p>${item.summary}</p>
            <div>${item.rights} * ${item.published_date}</div>
        </div>
    </div>`
    }).join("");


    document.getElementById("news-board").innerHTML=newsHTML;
}

searchButton.addEventListener("click",getNewsByKeyword);
getLatestNews();