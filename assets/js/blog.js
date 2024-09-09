const section = document.querySelector("section");
const blogs=JSON.parse(localStorage.getItem("blogs")) || [];

function loadBlogs(){

    section.textContent="";

    for(let i = 0 ; i < blogs.length ; i++){
        let article = document.createElement("article");
        let h3 = document.createElement("h3");
        let hr= document.createElement("hr");
        let pSentence= document.createElement("p");
        let pPost= document.createElement("p");
        h3.textContent=blogs[i].title;
        pSentence.classList.add("sentence");
        pSentence.textContent=blogs[i].content;
        pPost.innerHTML="Posted By: <span>" + blogs[i].username+"</span>"

    }

}