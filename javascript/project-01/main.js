let playBtn = document.getElementById("playBtn")
let userInput = document.getElementById("userInput")
let resultArea = document.getElementById("resultArea")

playBtn.addEventListener("click",play) // play 함수를 매개변수처럼 넘김

let computerNum = 0

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1
    console.log("정답", computerNum)
}
pickRandomNum()


function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "UP!!"
    }else if(userValue > computerNum){
        resultArea.textContent = "Down!!"
    }else{
        resultArea.textContent = "맞췄습니다!!"
    }
}