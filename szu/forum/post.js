const postEl = document.querySelector(".post");
const commentsEl = document.querySelector(".comments");

const form = document.querySelector(".new-comment-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  handleCreateComment(data);

  location.reload();
});

function handleCreateComment(data) {
  if (data.author.trim().length === 0 || data.content.trim().length === 0) {
    alert("Ime i sadržaj su obavezni!");
    return;
  }

  const newComment = {
    author: data.author,
    content: data.content,
    date: new Date().toISOString(),
  };

  const posts = JSON.parse(localStorage.getItem("posts")) ?? [];

  const queryId = new URLSearchParams(window.location.search).get("id");

  const post = posts.find((_, index) => index === parseInt(queryId));

  if (!post) {
    alert("Post ne postoji");
    return;
  }

  post.comments.push(newComment);

  localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPost() {
  const posts = JSON.parse(localStorage.getItem("posts")) ?? [];
  const queryId = new URLSearchParams(window.location.search).get("id");

  const post = posts.find((_, index) => index === parseInt(queryId));

  if (!post) {
    postEl.innerHTML = "<p>Post ne postoji</p>";
    return;
  }

  const newPostContentHtml = `
	<h1 class="post__title">
		${post.title}
	</h1>
	<p class="post__content">
		${post.content}
	</p>
	<p class="post__time">
		${new Date(post.date).toLocaleDateString()}
	</p>`;

  postEl.innerHTML = newPostContentHtml;

  post.comments.forEach((comment) => {
    const newCommentHtml = `
		<li class="comment">
			<div class="comment__top">
				<h3 class="comment__author">${comment.author}</h3>
				<p class="comment__time">
					${new Date(comment.date).toLocaleDateString()}
				</p>
			</div>
			<p class="comment__content">
				${comment.content}
			</p>
		</li>`;

    commentsEl.innerHTML += newCommentHtml;
  });
}

renderPost();
