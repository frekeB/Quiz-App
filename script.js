const questionText = document.querySelector(".question-text");
const optionBox = document.querySelector(".option-box");
const currentQuestionNum = document.querySelector(".current-question-num");
const answerDescription = document.querySelector(".answer-description");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const correctAnswers = document.querySelector(".correct-answers");
let questionIndex = 0;
let score = 0;
let number = 0;

const myApp = [{
        question: " What food makes up nearly all (around 99%) of a Giant Panda’s diet?",
        options: [" fish", "Bamboo", " honey", "leaves"],
        answer: 1,
    },
    {
        question: " True or false? Mice live for up to 10 years",
        options: [" True", " False"],
        answer: "1",
        description: " Captive mice live for up to 2 and a half years while wild mice only live for an average of around 4 months",
    },
    {
        question: " What is the name of the phobia that involves an abnormal fear of spiders?",
        options: [
            "Arachnophobia",
            "spidyophobia",
            " speciesophobia",
            "haemeaophobia",
        ],
        answer: 0,
    },
    {
        question: " What is the largest type of ‘big cat’ in the world?",
        options: [" Lion", "Elephant", "Tiger", " crocodile"],
        answer: 2,
        description: "The tiger weighs up to 300 kilograms (660 pounds) ",
    },
    {
        question: " True or false?Crocodiles have no sweat glands so they use their mouths to release heat.",
        options: [" True", " False"],
        answer: 0,
        description: "They often sleep with their mouth open to cool down.",
    },
    {
        question: " Yes or No? Are butterflies insects?",
        options: [" Yes", " No"],
        answer: 0,
    },
    {
        question: "What are female Elephant called?",
        options: ["Deos", " Elepts", " Pegs", " Cows"],
        answer: 3,
    },
    {
        question: "True or false? Bats are mammals. ",
        options: [" True", "False"],
        answer: 0,
    },
    {
        question: "What is the fastest land animal in the world?",
        options: ["Dog", " Cheetah", "Lion", " Cow"],
        answer: 1,
    },
];

function load() {
    number++;
    /* to load questions and options*/
    questionText.innerHTML = myApp[questionIndex].question;
    createOptions();
    scoreBoard();
    // load question number
    currentQuestionNum.innerHTML = number + " / " + myApp.length;
}

/* to display options*/
function createOptions() {
    optionBox.innerHTML="";
    for (let i = 0; i < myApp[questionIndex].options.length; i++) {
        const option = document.createElement("div");
        option.innerHTML = myApp[questionIndex].options[i];
        option.classList.add("option");
        option.id = i;
        option.setAttribute("onclick", "check(this)")
        optionBox.appendChild(option);
    }
}
/* check for correct and wrong answer*/
function check(ele) {
    const id = ele.id;
    if (id == myApp[questionIndex].answer) {
        ele.classList.add("correct");
        score++;
        scoreBoard();
    } else {
        ele.classList.add("wrong");
    }

    disableOptions();
    showAnswerDiscription();
    showNextQuestionBtn();
}

function disableOptions() {
    for (let i = 0; i < optionBox.children.length; i++) {
        optionBox.children[i].classList.add("already-answered");
    }
}

function showAnswerDiscription() {
    if (typeof myApp[questionIndex].description !== 'undefined') {
        answerDescription.classList.add("show");
        answerDescription.innerHTML = myApp[questionIndex].description
    }
}

function hideAnswerDiscription(){
    answerDescription.classList.remove("show");
    answerDescription.innerHTML = "";
}

function showNextQuestionBtn(){
    nextQuestionBtn.classList.add("show");
}

function hideNextQuestionBtn() {
    nextQuestionBtn.classList.remove("show");
}

function scoreBoard() {
    correctAnswers.innerHTML = score;
}
nextQuestionBtn.addEventListener("click", nextQuestion);

function nextQuestion() {
    questionIndex++;
    load();
    hideNextQuestionBtn();
    hideAnswerDiscription();

}
window.onload = () => {
    load();
};