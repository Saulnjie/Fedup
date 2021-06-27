export const CMS_URL = "https://cms.saulnjie.tech"

export async function getPosts() {
    const response = await fetch(`${CMS_URL}/posts`)
    return await response.json()
}

export async function getPost(postId) {
    const response = await fetch(`${CMS_URL}/posts/${postId}`)
    return await response.json()
}

const postId = new URLSearchParams(window.location.search).get("postId")
const postContainer = document.querySelector(".post-container")

getPosts(postId)
        .then(post => {
        const article = document.createElement("article")
        // article.innerHTML = marked(body)
        postContainer.appendChild(article)

        const titleContainer = document.createElement("div");

        titleContainer.innerHTML = `
        <div class="container post-title-and-paragraph">
            <h2>${post.title}</h2>
            <span>${post.subtitle}</span></div>
        `
        article.appendChild(titleContainer)
        // article.style.backgroundImage = `url(${CMS_URL}${post.coverPhoto.formats.small.url})`
    })