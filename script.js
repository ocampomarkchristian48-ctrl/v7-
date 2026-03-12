const questions=[

{
question:"You flip two coins. What is the probability both are heads?",
choices:["1/2","1/3","1/4","1/6"],
answer:2
},

{
question:"A 6 sided die is rolled. Probability of even number?",
choices:["1/6","1/2","2/3","3/4"],
answer:1
},

{
question:"Probability of drawing a heart from 52 cards?",
choices:["1/2","1/4","1/13","1/3"],
answer:1
},

{
question:"Two dice rolled. Probability sum = 7?",
choices:["1/6","1/12","1/8","1/4"],
answer:0
},

{
question:"Bag: 4 red, 3 blue, 3 green. Probability of blue?",
choices:["3/10","1/2","1/5","2/5"],
answer:0
},

{
question:"All cats are mammals. Milo is a cat. Conclusion?",
choices:["Reptile","Mammal","Bird","Fish"],
answer:1
},

{
question:"All students study. Lia is a student. What is true?",
choices:["Lia studies","Lia teaches","Lia sleeps","Lia travels"],
answer:0
},

{
question:"All teachers work at schools. Mark is teacher. What is true?",
choices:["Hospital","School","Bank","Store"],
answer:1
},

{
question:"All even numbers divisible by 2. 8 is even. Conclusion?",
choices:["Divisible by 3","Divisible by 5","Divisible by 2","Divisible by 7"],
answer:2
},

{
question:"Alex, Bea, Carl jobs: Doctor Chef Pilot. Who is Doctor?",
choices:["Alex","Bea","Carl","None"],
answer:2
}

]

let currentQuestion=0
let score=0

function startGame(){

let name=document.getElementById("playerName").value

if(name===""){
alert("Enter your name")
return
}

document.getElementById("startScreen").classList.add("hidden")
document.getElementById("descScreen").classList.remove("hidden")

}

function startLevel1(){

document.getElementById("descScreen").classList.add("hidden")
document.getElementById("quizScreen").classList.remove("hidden")

showQuestion()

}

function showQuestion(){

let q=questions[currentQuestion]

document.getElementById("question").innerText=q.question

document.getElementById("progressText").innerText=
"Question "+(currentQuestion+1)+" / "+questions.length

document.getElementById("progressFill").style.width=
((currentQuestion)/questions.length*100)+"%"

let answers=document.getElementById("answers")
answers.innerHTML=""

q.choices.forEach((choice,index)=>{

let btn=document.createElement("button")
btn.innerText=choice
btn.classList.add("answerBtn")

btn.onclick=()=>selectAnswer(btn,index)

answers.appendChild(btn)

})

document.getElementById("nextBtn").classList.add("hidden")

}

function selectAnswer(btn,index){

let correct=questions[currentQuestion].answer

let buttons=document.querySelectorAll(".answerBtn")

buttons.forEach(b=>b.disabled=true)

if(index===correct){

btn.classList.add("correct")
score++

}else{

btn.classList.add("wrong")
buttons[correct].classList.add("correct")

}

document.getElementById("score").innerText=score

document.getElementById("nextBtn").classList.remove("hidden")

}

function nextQuestion(){

currentQuestion++

if(currentQuestion<questions.length){

showQuestion()

}else{

finishGame()

}

}

function finishGame(){

let percent=(score/questions.length)*100

if(percent>=70){

alert("🎉 You Passed!")

}else{

alert("❌ You failed. Try again.")

}

location.reload()

}
