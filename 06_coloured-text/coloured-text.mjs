import fetch from "node-fetch";


const btn = document.querySelector("#shopbtn");
const input = document.querySelector("#shopinput");
const shoplist = document.querySelector("#shoplist");

btn.addEventListener("click", () => getNewItem(input));

function getNewItem(inputElement) {
    console.log(inputElement.value);
    let newItem = document.createElement("li");
    newItem.textContent = inputElement.value;
    shoplist.appendChild(newItem);
}


// CANNOT CALL API FROM FRONTEND

async function shorten(longUrl) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    // method is a string
    method: "POST",
    // headers is another object nested inside response
    headers: {
      "Authorization": "Bearer a90852b43a918a4d08b62e36ef78093109147532",
      "Content-Type": "application/json"
    },
    // body is a JSON string created from a JS object
    body: JSON.stringify({
      long_url: longUrl
    })
  });

  const data = await response.json();
  console.log(data);
}


shorten("https://google.com");


