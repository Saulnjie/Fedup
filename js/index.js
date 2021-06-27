export const CMS_URL = "https://cms.saulnjie.tech"

export async function getPosts() {
    const response = await fetch(`${CMS_URL}/posts`)
    return await response.json()
}

export async function getPost(postId) {
    const response = await fetch(`${CMS_URL}/posts/${postId}`)
    return await response.json()
}


getPosts()
    .then(posts => {
        allPosts = posts

        const article = document.createElement("article")

        const body = post.body.replaceAll("/uploads", `${CMS_URL}/uploads`)
        article.innerHTML = marked(body)
        postContainer.appendChild(article)

        const titleContainer = document.createElement("div");

        titleContainer.innerHTML = `
        <div class="container post-title-and-paragraph">
            <h2>${post.title}</h2>
            <span>${post.subtitle}</span></div>
        `

        banner.appendChild(titleContainer)
        banner.style.backgroundImage = `url(${CMS_URL}${post.coverPhoto.formats.large.url})`
    })