let jokes = document.querySelector(".jokes");

let quotes = document.querySelector(".quotes");

let facts = document.querySelector(".facts");
let btnj = document.querySelector(".btnj");
let btnq = document.querySelector(".btnq");
let btnf = document.querySelector(".btnf");

async function getjokes() {
    let categories = ["general", "programming", "knock-knock"];
    let randomcategry = categories[Math.floor(Math.random() * categories.length)];

    let url = `https://official-joke-api.appspot.com/jokes/${randomcategry}/random`;

    let response = await fetch(url);
    let data =  await response.json();
    let jks = document.querySelector(".jks");
    jks.innerText = data[0].setup +"-"+data[0].punchline;

}

async function getquote(){
    let url = "https://dummyjson.com/quotes/random";
    let response = await fetch(url);
    let data = await response.json();
    let qts = document.querySelector(".qts").innerText = `"${data.quote}"- ${data.author}`
}

async function getfacts() {
    let url = "https://uselessfacts.jsph.pl/random.json";
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector(".fts").innerText = data.text;
}

btnj.addEventListener("click", getjokes);
btnq.addEventListener("click",getquote);
btnf.addEventListener("click",getfacts);