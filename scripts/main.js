document.addEventListener("DOMContentLoaded", async () => {
    const postsList = document.getElementById("posts-list");
    const posts = [
        { title: "게시글 1", file: "posts/first-post.md" },
        { title: "게시글 2", file: "posts/second-post.md" }
    ];

    for (const post of posts) {
        const listItem = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = post.title;

        link.addEventListener("click", async (event) => {
            event.preventDefault();
            const content = await fetchMarkdownAsHTML(post.file);
            document.body.innerHTML = `
                <h1>${post.title}</h1>
                <div>${content}</div>
                <a href="index.html">← 돌아가기</a>
            `;
        });

        listItem.appendChild(link);
        postsList.appendChild(listItem);
    }
});