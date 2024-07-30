const quizData = [
    {
        question: "What does HTML stand for ?",
        a: "Hypertext Markup Language",
        b: "Hypertext Transfer Protocol",
        c: "Hypertext Machine Language",
        d: "Hightext Markup Language",
        correct: "a"
    },
    {
        question: "Which language is primarily used for web styling ?",
        a: "JavaScript",
        b: "HTML",
        c: "CSS",
        d: "Python",
        correct: "c"
    },
    {
        question: "What is the purpose of the `console.log()` function in JavaScript ?",
        a: "To display output in the browser console",
        b: "To create a new console window",
        c: "To log errors in the application",
        d: "To open a new tab in the browser",
        correct: "a"
    },
    {
        question: "What does API stand for ?",
        a: "Application Programming Interface",
        b: "Advanced Programming Integration",
        c: "Application Process Interface",
        d: "Advanced Protocol Integration",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
const messageEl = document.getElementById('message');
const audio = new Audio('sound/Try.mp3');
const totalQuizShow = document.createElement('div');
totalQuizShow.style.marginTop = '20px';

let currentQuiz = 0;
let score = 0;
let totalQuiz = quizData.length;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    totalQuizShow.innerHTML = `Total: ${totalQuiz - currentQuiz}`;
    quiz.appendChild(totalQuizShow);
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;
        }
    }
});

let timeLeft = 5;
const timeEl = document.getElementById('time');

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            messageEl.innerText = 'Time is over!';
            messageEl.style.color = 'red';
            messageEl.style.fontSize = '1.5rem';
            messageEl.style.fontWeight = 'bold';
            messageEl.style.textAlign = 'center';

            audio.play();

            const tryBtn = document.createElement('button');
            tryBtn.innerText = 'Try Again';
            tryBtn.addEventListener('click', () => {
                location.reload();
            });
            tryBtn.style.backgroundColor = 'blue';
            tryBtn.style.color = 'white';
            messageEl.appendChild(tryBtn);

            submitBtn.disabled = true;
        }
    }, 1000);
}
startTimer();

function generatePdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.text('Quiz Result', 10, 10);
    doc.text(`You answered correctly at ${score}/${quizData.length} questions.`, 10, 20);

    quizData.forEach((quiz, index) => {
        doc.text(`${index + 1}. ${quiz.question}`, 10, 30 + (index * 10));
    });

    doc.save('quiz.pdf');
}
