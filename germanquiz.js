var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What is the German translation of the given English word 'Daughter' ?",
    "options": [
    {
    "a": "Sohn",
    "b": "Tochter",
    "c": "Vater",
    "d": "Cousine"
    }
    ],
    "answer": "Tochter",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "Translation of 'Year' in German is ",
    "options": [
    {
    "a": "Jahr",
    "b": "Sep",
    "c": "Hel",
    "d":"spielen"
    }
    ],
    "answer": "Jahr",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "'Hello' can be written in German as ?",
    "options": [
    {
    "a": "Hallo",
    "b": "Halo",
    "c": "Hall",
    "d": "Helle"
    }
    ],
    "answer": "Hallo",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "'lachen' means 'laughing' in English ?",
    "options": [
    {
    "a": "True",
    "b": "False"
    }
    ],
    "answer": "True",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "'Beautiful' can be written in German as",
    "options": [
    {
    "a": "Hässlich",
    "b": "Klein",
    "c": "Suchen",
    "d": "Schön",
    }
    ],
    "answer": "Schön",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "Translation of 'Difficult' is ?",
    "options": [
    {
    "a": "Einfach",
    "b": "Schwierig",
    "c": "Schlecht",
    "d":"Spiel"
    }
    ],
    "answer": "Schwierig",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "You can say in 'Good Morning' in German as",
    "options": [
    {
    "a": "Guten Morgen",
    "b": "Guten Abend",
    "c": "Gute Nacht",
    "d":"Guter Tag"
    }
    ],
    "answer": "Guten Morgen",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "'Monday' can be written in German as ?",
    "options": [
    {
    "a": "Dienstag",
    "b": "Donnerstag",
    "c": "Montag",
    "d": "Freitag",
    }
    ],
    "answer": "Montag",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which month is this 'February' ?",
    "options": [
    {
    "a": "April",
    "b": "Juni",
    "c": "Dürfen",
    "d": "Februar"
    }
    ],
    "answer": "Februar",
    "score": 0,
    "status": ""
    },
    
    {
    "id": 10,
    "question": "Which number is this '3' in German language ?",
    "options": [
    {
    "a": "Drie",
    "b": "zwei",
    "c": "Eins",
    "d":"fünf­und­zwanzig"
    }
    ],
    "answer": "Drei",
    "score": 0,
    "status": ""
    },
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });