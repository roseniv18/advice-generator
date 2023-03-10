const diceBtn = document.querySelector(".dice-btn")
const adviceNum = document.querySelector("#advice-num")
const adviceText = document.querySelector(".advice-text")

const getAdvice = async () => {
    try {
        const response = await fetch("https://api.adviceslip.com/advice", {cache: "no-store"})
        const data = await response.json()
        return data.slip
    }
    catch(err) {
        console.log(err)
    }
}

const showAdvice = async () => {
    const {advice, id} = await getAdvice()
    adviceText.innerText = advice
    adviceNum.innerText = id
} 

// On initial page load
showAdvice()

// On button click
diceBtn.addEventListener("click", () => {
    showAdvice()
})