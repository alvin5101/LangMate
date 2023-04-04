
var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "What will you call 'Time' in hindi?",
    "options": [
    {
    "a": "समय",
    "b": "वेळ",
    "c": "जानवर",
    "d": "पौधा"
    }
    ],
    "answer": "समय",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "What will you call 'Plant' in hindi?",
    "options": [
    {
    "a": "नकाब",
    "b": "पौधा",
    "c": "पत्थर",
    "d": "घास"
    }
    ],
    "answer": "पौधा",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "How will you say 'Hello' in hindi?",
    "options": [
    {
    "a": "नमस्कार",
    "b": "अलविदा",
    "c": "जीतना",
    "d": "नमस्ते"
    }
    ],
    "answer": "नमस्ते",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "How will you say 'water' in hindi?",
    "options": [
    {
    "a": "पत्ता",
    "b": "पाणी",
    "c": "पानी",
    "d": "पान",
    }
    ],
    "answer": "पानी",
    "score": 0,
    "status": ""
    },
    {
    "id": 5,
    "question": "How will you say 'Morning' in hindi?",
    "options": [
    {
    "a": "सुबह",
    "b": "सकाळी",
    "c": "शाम",
    "d": "रात",
    }
    ],
    "answer": "सुबह",
    "score": 0,
    "status": ""
    },
    {
    "id": 6,
    "question": "How will you say 'Sing' in hindi",
    "options": [
    {
    "a": "झोप",
    "b": "नींद",
    "c": "गाणे",
    "d": "गाना"
    }
    ],
    "answer": "गाना",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "How will you say 'Run' in hindi?",
    "options": [
    {
    "a": "टहलना",
    "b": "दौड़ना",
    "c": "चालणे",
    "d": "धावणे"
    }
    ],
    "answer": "दौड़ना",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "what will you call 'Work' in hindi?",
    "options": [
    {
    "a": "काम",
    "b": "व्यायामशाळा",
    "c": "जिम",
    "d": "लोमड़ी",
    }
    ],
    "answer": "काम",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "what will you say for 'Salt' in hindi?",
    "options": [
    {
    "a": "नमक",
    "b": "मीठ",
    "c": "चावल",
    "d": "All of the above."
    }
    ],
    "answer": "नमक",
    "score": 0,
    "status": ""
    },
    
    {
    "id": 10,
    "question": "How will you say 'Risk' in hindi?",
    "options": [
    {
    "a": "आध्यात्मिक",
    "b": "धोका",
    "c": "जोखिम",
    "d": "ऋृण"
    }
    ],
    "answer": "जोखिम",
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