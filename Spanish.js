const questions = [
    {
        question: "Translate '¿Cuál es tu comida favorita?' to English.",
        sentence: "¿Cuál es tu comida favorita?",
        answer: "What is your favorite food?"
    },
    {
        question: "Translate '¿Qué edad tienes?' to English.",
        sentence: "¿Qué edad tienes?",
        answer: "How old are you?"
    },
    {
        question: "Translate '¿Dónde vives? ' to English.",
        sentence: "¿Dónde vives? ",
        answer: "Where do you live?"
    },
    {
        question: "Translate '¿Qué te gusta hacer en tu tiempo libre?' to English.",
        sentence: "¿Qué te gusta hacer en tu tiempo libre?",
        answer: "What do you like to do in your free time?"
    },
    {
        question: "Translate '¿Cuál fue el último libro que leíste?' to English.",
        sentence: "¿Cuál fue el último libro que leíste?",
        answer: "What was the last book you read?"
    },
    {
        question: "Translate '¿Qué país te gustaría visitar?' to English.",
        sentence: "¿Qué país te gustaría visitar?",
        answer: "Which country would you like to visit?"
    },
    {
        question: "Translate '¿Me puedes ayudar por favor?' to English.",
        sentence: "¿Me puedes ayudar por favor?",
        answer: "Can you please help me?"
    },
    {
        question: "Translate '¿Cuál es tu película favorita? ' to English.",
        sentence: "¿Cuál es tu película favorita? ",
        answer: "What is your favorite movie?"
    },
    {
        question: "Translate '¿Cuáles son tus hobbies?' to English.",
        sentence: "¿Cuáles son tus hobbies?",
        answer: "What are your hobbies?"
    },
    {
        question: "¿Cómo te sientes hoy?' to English.",
        sentence: "¿Cómo te sientes hoy?",
        answer: "How are you feeling today?"
    }


];

const questionEl = document.getElementById("question");
const sentenceEl = document.getElementById("sentence");
const translationEl = document.getElementById("translation");
const checkBtn = document.getElementById("check-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackEl = document.getElementById("feedback");

let currentQuestion = 0;

function displayQuestion() {
    questionEl.innerText = questions[currentQuestion].question;
    sentenceEl.innerText = questions[currentQuestion].sentence;
}

function checkAnswer() {
    const userAnswer = translationEl.value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase().trim();

    if (userAnswer === correctAnswer) {
        feedbackEl.innerHTML = "<p id='correct'>Correct!</p>";
    } else {
        feedbackEl.innerHTML = "<p id='incorrect'>Incorrect. The correct answer is: " + questions[currentQuestion].answer + "</p>";
    }

    translationEl.disabled = true;
    checkBtn.disabled = true;
    nextBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
        translationEl.disabled = false;
        checkBtn.disabled = false;
        translationEl.value = "";
        feedbackEl.innerHTML = "";
        nextBtn.style.display = "none";
    } else {
        questionEl.innerText = "Lesson complete!";
        sentenceEl.innerText = "";
        translationEl.style.display = "none";
        checkBtn.style.display = "none";
        nextBtn.style.display = "none";
        feedbackEl.innerHTML = "";
    }
}

displayQuestion();

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextQuestion);
