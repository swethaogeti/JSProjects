const btn = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

btn.addEventListener("click", generateJoke);
async function generateJoke() {
  const confing = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch("https://icanhazdadjoke.com", confing);
  const data = await res.json();
  jokeEl.innerHTML = data.joke;
}
generateJoke();
