export const CMS_URL = "https://cms.saulnjie.tech"
 
export async function getPosts() {
    const response = await fetch(`${CMS_URL}/posts`)
    return await response.json()
}
 
export async function getPost(postId) {
    const response = await fetch(`${CMS_URL}/posts/${postId}`)
    return await response.json()
}
 
const postContainer = document.querySelector(".posts-container")
 
getPosts()
    .then((posts) => {
        posts.forEach((post) => {
            const article = document.createElement("article")
            postContainer.appendChild(article)
 
            const titleContainer = document.createElement("div");
 
            titleContainer.innerHTML = `
            <a href="/post?postId=${post.id}">
            <div class="container post-title-and-paragraph">
                <h2>${post.title}</h2>
                <span>${post.subtitle}</span></div></a>
            `
            article.appendChild(titleContainer)
            article.style.backgroundImage = `url(${CMS_URL}${post.coverPhoto.formats.small.url})` 
        })
    })