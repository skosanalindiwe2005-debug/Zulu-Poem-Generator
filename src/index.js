function displayPoem(response) {
  new Typewriter(".poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let poem = document.querySelector(".poem");
  poem.innerHTML = "Generating a poem...";

  let searchInputElement = document.querySelector("#search-form-input");

  let apiKey = "a15t332fa59f4b3b71db27ddcdod075f";
  let prompt = `User instructions are: Generate a Zulu poem about ${searchInputElement.value}`;
  let context =
    "You are an AI model with lots of knowledge about poems and you love to write short romantic poems. Your mission is to always generate a four line poem divide by <br /> elements in basic HTML. Make sure to follow the user instructions. Sign with 'Lindiwe's AI' in a <strong> and <em> elements at the end of the poem. Do not include that it is in HTML. Behave!";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", generatePoem);
