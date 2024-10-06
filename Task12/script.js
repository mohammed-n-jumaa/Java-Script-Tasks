const quizData = [
    {
        question: "Which is the largest animal in the world?",
        a: "Shark",
        b: "Blue Whale",
        c: "Elephant",
        d: "Giraffe",
        correct: "b"
    },
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        a: "J.K. Rowling",
        b: "J.R.R. Tolkien",
        c: "George R.R. Martin",
        d: "Agatha Christie",
        correct: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll("input[name='answer']");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const scoreContainer = document.getElementById("score-container");
const scoreEl = document.getElementById("score");
const playAgainBtn = document.getElementById("play-again");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
        answerEl.parentElement.classList.remove('correct', 'incorrect');
    });
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        const correctAnswer = quizData[currentQuiz].correct;
        if (answer === correctAnswer) {
            score++;
            document.getElementById(answer).parentElement.classList.add('correct');
        } else {
            document.getElementById(answer).parentElement.classList.add('incorrect');
            document.getElementById(correctAnswer).parentElement.classList.add('correct');
        }

        setTimeout(() => {
            currentQuiz++;
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.classList.add("hidden");
                scoreContainer.classList.remove("hidden");
                scoreEl.innerText = `You scored ${score} out of ${quizData.length}!`;
            }
        }, 1000);
    }
});

playAgainBtn.addEventListener("click", () => {
    currentQuiz = 0;
    score = 0;
    quiz.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    loadQuiz();
});
