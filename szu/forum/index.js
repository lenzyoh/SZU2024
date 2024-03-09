const postsListEl = document.querySelector(".posts-list");

const form = document.querySelector(".new-post-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  handleCreatePost(data);

  location.reload();
});

function handleCreatePost(data) {
  if (data.title.trim().length === 0 || data.content.trim().length === 0) {
    alert("Naslov i sadržaj su obavezni!");
    return;
  }

  const posts = JSON.parse(localStorage.getItem("posts")) ?? [];

  const newPost = {
    id: posts.length,
    title: data.title,
    content: data.content,
    date: new Date().toISOString(),
    comments: [],
  };

  posts.push(newPost);

  localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
  const posts = JSON.parse(localStorage.getItem("posts")) ?? [];

  posts.forEach((post, index) => {
    const newPostEl = `
		<li class="post-item">
			<a class="post-item__title" href="./post.html?id=${index}">
				${post.title}
			</a>
			<div class="post-item__bottom">
				<p class="post-item__time">
					${new Date(post.date).toLocaleDateString()}
				</p>
				<p class="post-item__comments">${post.comments.length} odgovor/a</p>
			</div>
		</li>`;
    postsListEl.innerHTML += newPostEl;
  });
}

renderPosts();
