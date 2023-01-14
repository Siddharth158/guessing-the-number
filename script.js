let n = Math.floor(Math.random() * 100) + 1
console.log(n)
let count = 1
let input = document.querySelector(".num-guessed")
let submit = document.getElementById("submit")
let result = document.getElementById("final-result")
let cn = document.getElementById("count-number")
let lh = document.getElementById("low-high")
let btn = document.getElementById("reload-btn")
function check() {
  let left = 10 - count
  let val = input.value
  val = Number.parseInt(val)
  if (count == 10) {
    if (val === n) {
      console.log(val)
      result.textContent = "congratulations you guessed it correct!!!"
      cn.textContent = "you are a pro!!"
      lh.textContent = "wanna play again!"
      btn.textContent="Reload"
      btn.style.display="inline"
    }
    else {
      cn.textContent = `your guess "${val}" is wrong.you have ${left} turns left!`
      lh.textContent = `the surprise number was ${n}`
      btn.textContent="Reload"
      btn.style.display="inline"
    }
  }
  else {
    if (val === n) {
      console.log(val)
      result.textContent = "congratulations you guessed it correct!!!"
      cn.textContent = "you are a pro!!"
      lh.textContent = "wanna play again!"
      btn.textContent="Reload"
      btn.style.display="inline"

    }
    else {
      cn.textContent = `your guess "${val}" is wrong.you have ${left} turns left!`
      if (val > n) {
        lh.textContent = "HINT :- your value is greater than the surprise number"
      }
      else {
        lh.textContent = "HINT :- your value is less than the surprise number"
      }
    }
    ++count
  }
}
function rld(){
  location.reload();
}
submit.addEventListener("click", check)
btn.addEventListener("click", rld)