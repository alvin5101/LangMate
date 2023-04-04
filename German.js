const questions = [
    {
      question: "Translate 'Was ist dein Lieblingsessen?' to English.",
      sentence: "Was ist dein Lieblingsessen?",
      answer: "What is your favorite food?"
    },
    {
      question: "Translate 'Wie alt bist du?' to English.",
      sentence: "Wie alt bist du?",
      answer: "How old are you?"
    },
    {
      question: "Translate 'Wo wohnst du?' to English.",
      sentence: "Wo wohnst du?",
      answer: "Where do you live?"
    },
    {
      question: "Translate 'Was machst du gerne in deiner Freizeit?' to English.",
      sentence: "Was machst du gerne in deiner Freizeit?",
      answer: "What do you like to do in your free time?"
    },
    {
      question: "Translate 'Was war das letzte Buch, das du gelesen hast?' to English.",
      sentence: "Was war das letzte Buch, das du gelesen hast?",
      answer: "What was the last book you read?"
    },
    {
      question: "Translate 'Welches Land möchtest du gerne besuchen?' to English.",
      sentence: "Welches Land möchtest du gerne besuchen?",
      answer: "Which country would you like to visit?"
    },
    {
      question: "Translate 'Kannst du mir bitte helfen?' to English.",
      sentence: "Kannst du mir bitte helfen?",
      answer: "Can you please help me?"
    },
    {
      question: "Translate 'Was ist dein Lieblingsfilm? ' to English.",
      sentence: "Was ist dein Lieblingsfilm? ",
      answer: "What is your favorite movie?"
    },
    {
      question: "Translate 'Was sind deine Hobbys?' to English.",
      sentence: "Was sind deine Hobbys?",
      answer: "What are your hobbies?"
    },
    {
      question: "Translate 'Wie geht es dir heute?' to English.",
      sentence: "Translate 'Wie geht es dir heute?",
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
  