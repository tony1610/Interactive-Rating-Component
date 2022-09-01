let buttons = document.querySelectorAll('.rating')
let submit = document.querySelector(".btn")
let cardOne = document.querySelector(".card-one")
let cardTwo = document.querySelector(".card-two")
let rated  = document.querySelector(".rated")
let ratedScore = 0

buttons.forEach(rating => {
    rating.addEventListener('click', function(e){
        buttons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        ratedScore = e.target.innerText
    })
});

submit.addEventListener("click", () =>{
    cardOne.classList.add("notShow")
    cardTwo.classList.remove("notShow")

    rated.innerText = ratedScore
})

