const questions = [
    {
        que: "You're 3rd place right now in a race. What place are you in when you pass the person in 2nd place",
        A: "1st",
        B: "2nd",
        C: "3rd",
        D: "None of the above",
        ans: "B",
    },
    {
       que: "How many months have 28 days?",
       A: "2",
       B: "1",
       C: "All of them",
       D: "Depends if there's a leap year or not",
       ans: "D",
    },
    {
        que: "GFG stands for?",
        A: "Greatest For Good",
        B: "Good For Guilt",
        C: "Geeks For Geeks",
        D: "Go For God",
        ans: "C",
    },
    {
        que: "which of these is not a website for coding practice",
        A: "Leetcode",
        B: "GFG",
        C: "Netflix",
        D: "Code Studio",
        ans: "C",
    },
    {
        que: "What is the most used programming language in 2019?",
        A: "Java",
        B: "C",
        C: "Python",
        D: "JavaScript",
        ans: "D",
    },
    {
        que: "Who is the President of US?",
        A: "Florin Pop",
        B: "Donald Trump",
        C: "Ivan Saldano",
        D: "Mihai Andrei",
        ans: "B",
    },
    {
        que: "What does HTML stand for?",
        A: "Hypertext Markup Language",
        B: "Cascading Style Sheet",
        C: "Jason Object Notation",
        D: "Helicopters Terminals Motorboats Lamborginis",
        ans: "A",
    },
    {
        que: "What year was JavaScript launched?",
        A: "1996",
        B: "1995",
        C: "1994",
        D: "none of the above",
        ans: "B",
    },
];
const que = document.getElementById("id_que");
const op_a = document.getElementById("op_a");
const op_b = document.getElementById("op_b");
const op_c = document.getElementById("op_c");
const op_d = document.getElementById("op_d");
const submitBtn = document.getElementById("submit");
const ansEls = document.querySelectorAll(".answer");
const quizScore = document.getElementById("quiz_score");


let currQue = 0;
let score = 0;
quiz();
function quiz(){
    clearSelectedOption();
    const question = questions[currQue]; 
    que.innerText = question.que;
    op_a.innerText = question.A;
    op_b.innerText = question.B;
    op_c.innerText = question.C;
    op_d.innerText = question.D;
    
}

function selectedOption(){
    let ans = undefined;
    ansEls.forEach((ansEl)=>{
        if(ansEl.checked){
            ans = ansEl.id;
        }
    });
    return ans;
}

function clearSelectedOption(){
    ansEls.forEach((ansEl)=>{
        ansEl.checked=false;
    });
}

submitBtn.addEventListener("click",()=>{
    const ans = selectedOption();
    if(ans){
        if(ans===questions[currQue].ans){
            score++;
        }
        currQue++;
        if(currQue<questions.length) {
            quiz();
        }
        else {
            quizScore.innerHTML = `<h2>Your Score : ${score}/${questions.length}</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
})