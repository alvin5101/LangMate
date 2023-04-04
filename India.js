const questions = [
    {
      question: "Translate 'आपका पसंदीदा खाना क्या है?' to English.",
      sentence: "आपका पसंदीदा खाना क्या है?",
      answer: "What is your favorite food?"
    },
    {
      question: "Translate 'आप कितने साल के हो?' to English.",
      sentence: "आप कितने साल के हो?",
      answer: "How old are you?"
    },
    {
      question: "Translate 'आप कहाँ रहते हैं?' to English.",
      sentence: "आप कहाँ रहते हैं?",
      answer: "Where do you live?"
    },
    {
      question: "Translate 'आप अपने फ्री टाइम में क्या करना पसंद करते हैं?' to English.",
      sentence: "आप अपने फ्री टाइम में क्या करना पसंद करते हैं?",
      answer: "What do you like to do in your free time?"
    },
    {
      question: "Translate 'आपने अंतिम बार कौन सी किताब पढ़ी थी?' to English.",
      sentence: "आपने अंतिम बार कौन सी किताब पढ़ी थी?",
      answer: "What was the last book you read?"
    },
    {
      question: "Translate 'आप कौन सा देश घूमना चाहेंगे? ' to English.",
      sentence: "आप कौन सा देश घूमना चाहेंगे? ",
      answer: "Which country would you like to visit?"
    },
    {
      question: "Translate 'क्या आप मेरी मदद कर सकते हैं कृपया? ' to English.",
      sentence: "क्या आप मेरी मदद कर सकते हैं कृपया? ",
      answer: "Can you please help me?"
    },
    {
      question: "Translate 'आपकी पसंदीदा फिल्म कौन सी है?' to English.",
      sentence: "आपकी पसंदीदा फिल्म कौन सी है?",
      answer: "What is your favorite movie?"
    },
    {
      question: "Translate 'आपके हॉबी क्या हैं?' to English.",
      sentence: "आपके हॉबी क्या हैं?",
      answer: "What are your hobbies?"
    },
    {
      question: "आज आप कैसा महसूस कर रहे हैं?' to English.",
      sentence: "आज आप कैसा महसूस कर रहे हैं?",
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
  