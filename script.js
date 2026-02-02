document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.hash).scrollIntoView({ behavior: "smooth" });
  });
});
//other //

function clicked() {
  const email = document.getElementById("email").value.trim();

  const address = document.getElementById("address").value.trim();

  if (email !== "" && address !== "") {
    document.getElementById("Buynow").innerText = "LOADING....";
  } else {
  }
}

function suscribe() {
  const SusEmail = document.getElementById("Sus-email").value.trim();
  if (SusEmail !== "") {
    document.getElementById("Su").innerText = "LOADING....";
  } else {
  }
}