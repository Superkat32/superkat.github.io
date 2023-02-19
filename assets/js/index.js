const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const visitedKey = "visited";

window.onload = () => {
  const h1 = document.querySelector("h1");

  if (!localStorage.getItem(visitedKey)) {
    let iterations = 0;

    const interval = setInterval(() => {
      console.log("text is being hovered over!");
      h1.innerText = h1.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return h1.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= h1.dataset.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  }
};

window.addEventListener("beforeunload", () => {
  localStorage.removeItem(visitedKey);
});