const isLogged = localStorage.getItem("isLogged");

if (isLogged !== "tak") {
  window.location.href = "index.html";
}

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", () => {
  localStorage.setItem("isLogged", "nie");
  window.location.href = "index.html";
});
