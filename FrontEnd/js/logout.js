let connected = localStorage.getItem("connected");
let btnLogout = document.querySelector("#logout");


if (connected) {
  btnLogout.addEventListener("click", () => {
    localStorage.removeItem("connected");
    localStorage.removeItem("token");
    window.location.href = "./index.html";
  });
}


