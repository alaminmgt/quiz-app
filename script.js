const quiz = [
    {
        question : "Q1: What is HTML ? ",
        a: "Helllo to mu land ",
        b: "Hey text mark up language",
        c: "Hyper text make up language",
        d: "Hypertext mark up language",
        ans : "ans4"
    },
    {
        question : "Q2: What is CSS ? ",
        a: "Cascading style sheets",
        b: "castad style sheets",
        c: "Cats style Sheet",
        d: "Cut style sheet",
        ans : "ans1"
    },
    {
        question : "Q3: What is HTTP ? ",
        a: "Hypertext transfer product",
        b: "Hypertext transfer pure",
        c: "Hypertext transfer pen",
        d: "Hypertext transfer protocol",
        ans : "ans4"
    },
    {
        question : "Q4: What is JS ? ",
        a: "JavaScript ",
        b: "JavaSuper",
        c: "Javasupreme",
        d: "Jordanshow",
        ans : "ans1"
    },
]
const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quiz[questionCount];
    question.innerHTML = questionList.question;
    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;

};
loadQuestion();

const getCheckAnswer = () => {
    let answer ;
    answers.forEach((currentAns) => {
            if (currentAns.checked) {
                answer = currentAns.id;
            } 
        }); 
    return answer;      
};

const deselectAll = () => {
    answers.forEach ( (currentAns) => currentAns.checked = false);
}

submit.addEventListener("click", () => {
    const checkAnswer = getCheckAnswer();
    console.log(checkAnswer);

    if (checkAnswer === quiz[questionCount].ans ) {
        score++;
    }
    questionCount++;
    deselectAll();
    if (questionCount <quiz.length) {
        loadQuestion();
    }else{
        showScore.innerHTML = `
            <h3>Your score is ${score}/${quiz.length}</h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            
        `
        showScore.classList.remove("showScore");
    };
});
