const blogFormEl= document.querySelector("form");
const blogs=  JSON.parse(localStorage.getItem("blogs"))  || [];


const handleFormSubmit = function(event) {
    event.preventDefault();

    const usernameEl=document.querySelector("#username").value.trim();
    const titleEl=document.querySelector("#title").value.trim();
    const contentEl=document.querySelector("#content").value.trim();

    const newBlog={
        username: usernameEl,
        title: titleEl,
        content: contentEl,

    }

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs) );
    document.location.replace("blog.html");

}

blogFormEl.addEventListener("submit",handleFormSubmit);

