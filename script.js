const questions = [
    {
        question: "What year did the Titanic sink in the Atlantic Ocean on its maiden voyage from southhampton?",
        answers: [
            {text: "1943", correct: false},
            {text: "1912", correct: true},
            {text: "1979", correct: false},
            {text: "1920", correct: false},
        ]
    },

    {
        question: "What is the title of the first ever Carry On film and relased in 1958?",
        answers: [
            {text: "Caption sergeant", correct: false},
            {text: "Drangonfly: The First Flight ", correct: false},
            {text: "Carry on sergeant", correct: true},
            {text: "The loudest silence ", correct: false},
        ]
    },

    {
        question: "What is the name of the biggest technology company in South Korea?",
        answers: [
            {text: "Samsung", correct: true},
            {text: "Korea Electric Power Corporation", correct: false },
            {text: "Hyundai Motor", correct: false},
            {text: "LG electric", correct: false},
        ]
    },

    {
        question: "Who invented the tin can for preserving food in 1810?",
        answers: [
            {text: "Lewis collin", correct: false},
            {text: "Martin Shaw", correct: true},
            {text: "Milicent Roberts", correct: false},
            {text: "Peter Durand", correct: false},
        ]
    },

    {
        question: "What is the world's smallest bird?",
        answers: [
            {text: "Hoopoe", correct: false},
            {text: "Sunbird", correct: false},
            {text: "Hummingbird", correct: true},
            {text: "sparrow", correct: false},
        ]
    },

    {
        question: "What is the chemical symbol for silver?",
        answers: [
            {text: "Au", correct: false},
            {text: "Ag", correct: true},
            {text: "O", correct: false},
            {text: "Rn", correct: false},
        ]
    },

    {
        question: " What is the capital of Portugal?",
        answers: [
            {text: "Libson", correct: true},
            {text: "Denmark", correct: false},
            {text: "Brasilia", correct: false},
            {text: "Rio de Jeneiro", correct: false},
        ]
    }
    



] ;

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion =  questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " +currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
       
    });
}

function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn= e.target;
    const  isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect"); 
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }

}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
}) ;

startQuiz();


