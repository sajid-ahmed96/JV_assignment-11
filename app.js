var questions = [{
    question: "HTML stands for",
    answer: "Hyper Text Markup Language",
    options: [
        "Hyper Text Meaning Language",
        "Hyper Tool Markup Language",
        "Hyper Text Markup Language",
        "Hyper Text Multiple Language",
    ]
},
{
    question: "CSS stands for",
    answer: "Cascading Style Sheet",
    options: [
        "Creative Style Sheet",
        "Cascading Style Sheet",
        "Common Style Sheet",
        "Colorful Style Sheet",
    ]
},
{
    question: "PHP stands for",
    answer: "Hypertext Preprocessor",
    options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Prerogramming",
        "Hometext Prerogramming",
    ]
},
{
    question: "SQL stands for",
    answer: "Structured Query Language",
    options: [
        "Structured Quantum Language",
        "Strict Query Language",
        "Stylesheet Query Language",
        "Structured Query Language",
    ]
},
{
    question: "XML stands for",
    answer: "eXtensible Markup Language",
    options: [
        "eXtensible Markup Language",
        "eXecutable Markup Language",
        "eXtra Multi-programming Language",
        "eXamine Multiple Language",
    ]
},
{
    question: "Whict tag is this <>:",
    answer: "An opening tag",
    options: [
        "A para tag",
        "An opening tag",
        "Both A & B",
        "A self closing tag",
    ]
},
{
    question: "span is a ______ element",
    answer: "Inline",
    options: [
        "Block",
        "Inline-Block",
        "Flex",
        "Inline",
    ]
},
{
    question: "Which hex color code define the white color?",
    answer: "#ffffff",
    options: [
        "#000000",
        "#ffffff",
        "#eeeeee",
        "#111111",
    ]
},
{
    question: "How to style a class attribute?",
    answer: ".className",
    options: [
        ".className",
        "#className",
        "className",
        "p className",
    ]
},
{
    question: "How to style a id attribute?",
    answer: "#idName",
    options: [
        "idName",
        ".idName",
        "h1 idName",
        "#idName",
    ]
}
]

var questionNum = document.getElementById('questionNum');
var question = document.getElementById('question');
var indexNum = 0;
var ansParent = document.getElementById('ansParent');
var marks = 0;
function showQuestion() {
    question.innerHTML = questions[indexNum].question;
    questionNum.innerHTML = "Question # " + [indexNum + 1] + "/" + questions.length;
    ansParent.innerHTML = "";
    for (var i = 0; i < questions[indexNum].options.length; i++) {
        ansParent.innerHTML += `<div class="col-md-6 py-2">
        <button class="btn btn-outline-primary px-5 rounded-pill w-100"
        onclick="checkAns('${questions[indexNum].options[i]}','${questions[indexNum].answer}')">
        ${questions[indexNum].options[i]}</button>
    </div>`
    }
}
showQuestion()

function nextQuestion() {
    indexNum++;
    showQuestion()
}

function checkAns(a, b) {
    if (a == b) {
        marks++;
        console.log(marks);
    }
    if (indexNum + 1 == questions.length) {
        alert("Your marks: " + marks);
    }
    else {
        nextQuestion();
    }
}