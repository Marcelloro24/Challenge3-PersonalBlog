const mainEl = document.querySelector("main");
const blogs=JSON.parse(localStorage.getItem("blogs")) || [];

const createEl = function (dynamicEl, text, parentEl) {
    const tag = document.createElement(dynamicEl);
    tag.textContent = text;
    parentEl.appendChild(tag);

    return tag
}

const loadBlogs = function(){



    for (let blog of blogs) {
        const article = createEl("article", null, mainEl);
        createEl("h3", blog.title, article);
        createEl("p", blog.content, article);
        createEl("p", blog.username, article);
    }
}
loadBlogs();