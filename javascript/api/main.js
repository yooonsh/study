let news = [];
let page = 1;
let total_page = 0;
let menus = document.querySelectorAll(".menus button")
menus.forEach((menu) => menu.addEventListener("click",(event)=>getNewsByTopic(event) ))

let searchButton = document.getElementById("search-button");

let url;
const getNews = async() =>{
 try{
    let header = new Headers({'x-api-key':'YlQbM-qvSd7Rk04gjW7AI1I1ycTvB0WPbzFiS_mXzkg'});
    url.searchParams.set('page', page)//&page=
    console.log(url)
    let response  = await fetch(url,{headers:header})
    let data = await response.json();
    if(response.status == 200){
        if(data.total_hits == 0){
            throw new Error("검색된 결과값이 없습니다.")
        }
        console.log("받는 데이터가 뭐지?", data)
        news = data.articles;
        total_page = data.total_pages
        console.log(news)
        render();
        pagenation();
    }else{
        throw new Error(data.message)
    }

 }catch(error){
    console.log("잡힌 에러는",error.message)
    errorRender(error.message)
 }
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

const errorRender = (message) =>{
    let errorHTML = `<div class="alert alert-danger text-center" role="alert">
    ${message}
  </div>`
    document.getElementById("news-board").innerHTML = errorHTML
}

const pagenation = () =>{
    //total_pages
    let pagenationHTML = ``
    //page
    //page_group
    let pageGroup = Math.ceil(page/5)
    //last
    let last = pageGroup*5
    //first
    if (last > total_page) {
        // 마지막 그룹이 5개 이하이면
        last = total_page;
      }
      let first = last - 4 <= 0 ? 1 : last - 4; // 첫그룹이 5이하이면
    //first~last 페이지 프린트

    if(first>=6){
        pagenationHTML = `<li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(1)">
        <span aria-hidden="true">&lt;&lt;</span>
        </a>
    </li>
        <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous" onclick="moveToPage(${page-1})">
        <span aria-hidden="true">&lt;</span>
        </a>
    </li>`
    }
    

    for(let i=first;i<=last;i++){
        pagenationHTML+= `<li class="page-item ${page==i?"active":""}"><a class="page-link" href="#" onclick="moveToPage(${i})">${i}</a></li>`
    }

    if(last<total_page){
        pagenationHTML += `<li class="page-item">
        <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${page+1})">
        <span aria-hidden="true">&gt;</span>
        </a>
    </li>
    <li class="page-item">
        <a class="page-link" href="#" aria-label="Next" onclick="moveToPage(${total_page})">
        <span aria-hidden="true">&gt;&gt;</span>
        </a>
    </li>`
    }

    document.querySelector(".pagination").innerHTML=pagenationHTML
}

const moveToPage = (pageNum) =>{
    //1. 이동하고싶은 페이지를 알아야한다
    page = pageNum
    
    //2. 이동하고싶은 페이지를 가지고 api를 다시 호출한다
    getNews()
}

searchButton.addEventListener("click",getNewsByKeyword);
getLatestNews();