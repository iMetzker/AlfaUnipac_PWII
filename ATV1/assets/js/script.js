const btnPostar = document.getElementById("btn-postar");
const textarea = document.querySelector("textarea");
const feedSection = document.querySelector(".feed");

// LIKE
function adicionarLike(button) {
  const icon = button.querySelector("i");
  const countSpan = button.querySelector("span");

  let liked = false;

  button.addEventListener("click", () => {
    let count = parseInt(countSpan.textContent);

    if (!liked) {
      icon.classList.remove("text-secondary");
      icon.classList.add("text-danger");
      count++;
      liked = true;
    } else {
      icon.classList.remove("text-danger");
      icon.classList.add("text-secondary");
      count--;
      liked = false;
    }

    countSpan.textContent = count;
  });
}
document.querySelectorAll(".btn-like").forEach(adicionarLike);

// HABILITANDO O BTN DO POST
textarea.addEventListener('input', () => {
  btnPostar.disabled = textarea.value.trim().length === 0;
});

// NOVO POST
btnPostar.addEventListener("click", function () {
  const texto = textarea.value.trim();

  const novoPost = document.createElement("div");
  novoPost.classList.add("mt-3", "p-3");
  novoPost.innerHTML = `
    <div class="d-flex align-items-center">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQycB3qp30_E0A02jurFXJCYqNaLTP2OyAwXg&s"
        class="rounded-circle me-3"
        alt="imagem de perfil"
      />
      <div>
        <strong>Thauriel</strong>
        <span class="text-muted">@iamthauriel</span>
        <p class="mb-0 mt-1">${texto}</p>
      </div>
    </div>
    <div class="d-flex align-items-center mt-2 icons-interacao">
      <button class="btn-like">
        <i class="bi bi-heart-fill text-secondary"></i>
        <span>0</span> curtidas
      </button>
      <span class="ms-3 text-muted">
        <i class="bi bi-chat-left-text"></i> 0 comentários
      </span>
    </div>
  `;

  feedSection.insertBefore(novoPost, feedSection.children[1]);
  textarea.value = "";
  btnPostar.disabled = true;

  // LIKE NOVO BTN
  const novoBotaoLike = novoPost.querySelector(".btn-like");
  adicionarLike(novoBotaoLike);
});
