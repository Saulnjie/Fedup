import { CMS_URL, getPost } from "./index"
import marked from "marked"

const postContainer = document.querySelector(".post-container")
const postId = new URLSearchParams(window.location.search).get("postId")



getPost(postId)
    .then(post => {
        const article = document.createElement("article")

        // const body = post.body.replaceAll("/uploads", `${CMS_URL}/uploads`)
        // // article.innerHTML = marked(body)
        postContainer.appendChild(article)

        const titleContainer = document.createElement("div");
        titleContainer.innerHTML = `
        <div class="container post-title-and-paragraph">
            <h2>${post.title}</h2>
            <span>${post.subtitle}</span></div>
        `

        article.appendChild(titleContainer)
        // // article.style.backgroundImage = `url(${CMS_URL}${post.coverPhoto.formats.small.url})`
    })

