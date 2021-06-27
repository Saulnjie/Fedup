import { CMS_URL, getPost } from "./index"
import marked from "marked"

const postContainer = document.querySelector(".post-container")
const postId = new URLSearchParams(window.location.search).get("postId")


getPost(postId)
    .then(post => {
        const article = document.createElement("article")

        postContainer.appendChild(article)

        const titleContainer = document.createElement("div");
       
        titleContainer.innerHTML = `
        
        <div class="container post-title-and-paragraph">
        <h2>${post.title}</h2>
        <span>${post.subtitle}</span>
        <p>${post.body}</p>
        </div>
        
        `
        article.appendChild(titleContainer)
    })

