const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const author = document.querySelector("#author");
btn.addEventListener("click", () => {
  const getQuote = async () => {
    try {
      const response = await fetch("/api/quote");
      const data = await response.json();
      console.log(data);
      text.innerHTML = data.text;
      author.innerHTML = data.author;
    } catch (err) {
      // handle error
      console.error(err);
    }
  };
  getQuote();
});
