function generatePoem(event) {
  event.preventDefault();

  new Typewriter(".poem", {
    strings: "Ngisahamba kuwo ohlabayo umhlabathi.",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generatePoem);
