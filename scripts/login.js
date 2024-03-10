const loginInput = document.getElementById("login_input");
const passwordInput = document.getElementById("password_input");
const loginBtn = document.getElementById("login_btn");

function tryToLogin() {
  const login = loginInput.value;
  const password = passwordInput.value;
  console.log(login, password);
  fetch("https://login-service-wsb-wj.netlify.app/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({
      login: login,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.isLogged) {
        localStorage.setItem("isLogged", "tak");
        window.location.href = "mainScreen.html";
      } else {
        document
          .getElementById("incorrect_data_text")
          .classList.remove("hidden");
      }
    });
}

passwordInput.addEventListener("keydown", (e) => {
  const clickedKey = e.key;
  if (clickedKey === "Enter") {
    tryToLogin();
  }
});

loginBtn.addEventListener("click", tryToLogin);
