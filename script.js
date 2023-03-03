const header = document.querySelector(".advice-header");
const text = document.querySelector('.advice-box')
const btn = document.querySelector('.button')

btn.addEventListener('click', () => {
  getAdvice()
})

window.onload = () => {
  getAdvice()
}


function getAdvice () {
  const url =
    "https://api.adviceslip.com/advice/" + Math.floor(Math.random() * 220);
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((adviceData) => {
      let adviceText = adviceData.slip.advice;
      let adviceId = adviceData.slip.id;

      header.innerText = "Advice#" + adviceId;
      text.innerHTML = adviceText;
    })
}


