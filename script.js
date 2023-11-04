const quote = document.querySelector("#quote");



function generateQuotes(){
    fetch("https://api.adviceslip.com/advice")
    .then(res=> res.json())
    .then(data=> rander(data))
}

generateQuotes();

function rander(data){
    console.log(data);
    quote.innerHTML = data?.slip?.advice;
}






