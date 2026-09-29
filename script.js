// ==============================
// QUIZ QUESTIONS
// ==============================

const questions = [

    // ==============================
    // HTML QUESTIONS - 1 to 10
    // ==============================

    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },

    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],
        answer: "<a>"
    },

    {
        question: "Which tag is used to create the largest heading in HTML?",
        options: [
            "<heading>",
            "<h6>",
            "<h1>",
            "<head>"
        ],
        answer: "<h1>"
    },

    {
        question: "Which HTML tag is used to insert an image?",
        options: [
            "<image>",
            "<img>",
            "<src>",
            "<picture>"
        ],
        answer: "<img>"
    },

    {
        question: "Which attribute specifies the destination of a hyperlink?",
        options: [
            "src",
            "link",
            "href",
            "url"
        ],
        answer: "href"
    },

    {
        question: "Which HTML element is used to create an unordered list?",
        options: [
            "<ol>",
            "<list>",
            "<ul>",
            "<li>"
        ],
        answer: "<ul>"
    },

    {
        question: "Which HTML tag is used to create a table row?",
        options: [
            "<td>",
            "<tr>",
            "<th>",
            "<table-row>"
        ],
        answer: "<tr>"
    },

    {
        question: "Which HTML element is used to create a form?",
        options: [
            "<input>",
            "<form>",
            "<fieldset>",
            "<submit>"
        ],
        answer: "<form>"
    },

    {
        question: "Which attribute is used to provide alternative text for an image?",
        options: [
            "title",
            "src",
            "alt",
            "text"
        ],
        answer: "alt"
    },

    {
        question: "Which HTML5 element is used to define navigation links?",
        options: [
            "<navigation>",
            "<navigate>",
            "<nav>",
            "<links>"
        ],
        answer: "<nav>"
    },


    // ==============================
    // CSS QUESTIONS - 11 to 20
    // ==============================

    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    },

    {
        question: "Which CSS property is used to change text color?",
        options: [
            "text-color",
            "font-color",
            "color",
            "foreground"
        ],
        answer: "color"
    },

    {
        question: "Which CSS property is used to change the background color?",
        options: [
            "background-color",
            "bg-color",
            "color-background",
            "background"
        ],
        answer: "background-color"
    },

    {
        question: "Which CSS property is used to change the font size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "size"
        ],
        answer: "font-size"
    },

    {
        question: "Which CSS property is used to make text bold?",
        options: [
            "font-weight",
            "text-bold",
            "font-style",
            "bold"
        ],
        answer: "font-weight"
    },

    {
        question: "Which CSS property is used to add space inside an element?",
        options: [
            "margin",
            "padding",
            "spacing",
            "border-spacing"
        ],
        answer: "padding"
    },

    {
        question: "Which CSS property is used to add space outside an element?",
        options: [
            "padding",
            "margin",
            "spacing",
            "outside"
        ],
        answer: "margin"
    },

    {
        question: "Which CSS layout system is commonly used to create one-dimensional layouts?",
        options: [
            "Float",
            "Flexbox",
            "Table",
            "Position"
        ],
        answer: "Flexbox"
    },

    {
        question: "Which CSS property is used to make an element a flex container?",
        options: [
            "flex: true",
            "display: flex",
            "position: flex",
            "flex-container: true"
        ],
        answer: "display: flex"
    },

    {
        question: "Which CSS rule is used to apply styles based on screen size?",
        options: [
            "@screen",
            "@responsive",
            "@media",
            "@device"
        ],
        answer: "@media"
    },


    // ==============================
    // JAVASCRIPT QUESTIONS - 21 to 30
    // ==============================

    {
        question: "Which keyword is used to declare a variable that cannot be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "static"
        ],
        answer: "const"
    },

    {
        question: "Which keyword is used to declare a block-scoped variable that can be reassigned?",
        options: [
            "var",
            "let",
            "const",
            "define"
        ],
        answer: "let"
    },

    {
        question: "Which operator is used for strict equality in JavaScript?",
        options: [
            "=",
            "==",
            "===",
            "!="
        ],
        answer: "==="
    },

    {
        question: "Which method is used to add an element to the end of an array?",
        options: [
            "push()",
            "pop()",
            "shift()",
            "add()"
        ],
        answer: "push()"
    },

    {
        question: "Which method removes the last element from an array?",
        options: [
            "remove()",
            "delete()",
            "pop()",
            "shift()"
        ],
        answer: "pop()"
    },

    {
        question: "Which method is commonly used to select an HTML element by its ID?",
        options: [
            "document.getElementById()",
            "document.getElement()",
            "document.selectId()",
            "document.findId()"
        ],
        answer: "document.getElementById()"
    },

    {
        question: "Which event occurs when a user clicks an HTML element?",
        options: [
            "onchange",
            "onmouseover",
            "onclick",
            "onload"
        ],
        answer: "onclick"
    },

    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: [
            "//",
            "/* */",
            "#",
            "<!-- -->"
        ],
        answer: "//"
    },

    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Method",
            "Digital Object Management"
        ],
        answer: "Document Object Model"
    },

    {
        question: "Which function is used to convert a JSON string into a JavaScript object?",
        options: [
            "JSON.parse()",
            "JSON.stringify()",
            "JSON.convert()",
            "JSON.object()"
        ],
        answer: "JSON.parse()"
    }

];


// ==============================
// QUIZ VARIABLES
// ==============================

let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;


// ==============================
// HTML ELEMENTS
// ==============================

const questionElement =
    document.getElementById("question");

const optionsContainer =
    document.getElementById("options-container");

const questionNumber =
    document.getElementById("question-number");

const scoreDisplay =
    document.getElementById("score-display");

const nextButton =
    document.getElementById("next-btn");

const quizBox =
    document.getElementById("quiz-box");

const resultBox =
    document.getElementById("result-box");

const finalScore =
    document.getElementById("final-score");

const restartButton =
    document.getElementById("restart-btn");


// ==============================
// SHOW QUESTION
// ==============================

function showQuestion() {

    selectedAnswer = null;

    const current = questions[currentQuestion];

    // Display question
    questionElement.textContent =
        current.question;

    // Display question number
    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    // Display current score
    scoreDisplay.textContent =
        `Score: ${score}`;

    // Remove previous options
    optionsContainer.innerHTML = "";


    // ==============================
    // CREATE OPTION BUTTONS
    // ==============================

    current.options.forEach(function(option) {

        const button =
            document.createElement("button");

        button.textContent = option;

        button.classList.add("option");


        // When option is clicked
        button.addEventListener("click", function() {

            selectAnswer(button, option);

        });


        optionsContainer.appendChild(button);

    });


    // ==============================
    // NEXT / SUBMIT BUTTON
    // ==============================

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "Submit";

    } else {

        nextButton.textContent = "Next";

    }

}


// ==============================
// SELECT ANSWER
// ==============================

function selectAnswer(button, answer) {

    // Get all option buttons
    const allOptions =
        document.querySelectorAll(".option");


    // Remove previous selection
    allOptions.forEach(function(option) {

        option.classList.remove("selected");

    });


    // Highlight selected option
    button.classList.add("selected");


    // Store selected answer
    selectedAnswer = answer;

}


// ==============================
// NEXT / SUBMIT BUTTON
// ==============================

nextButton.addEventListener("click", function() {


    // Check if user selected an answer

    if (selectedAnswer === null) {

        alert("Please select an answer.");

        return;

    }


    // ==============================
    // CHECK ANSWER
    // ==============================

    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    // Move to next question

    currentQuestion++;


    // ==============================
    // CHECK QUIZ STATUS
    // ==============================

    if (currentQuestion < questions.length) {

        // Show next question
        showQuestion();

    } else {

        // Quiz completed
        showResult();

    }

});


// ==============================
// SHOW FINAL RESULT
// ==============================

function showResult() {

    // Hide quiz
    quizBox.style.display = "none";


    // Show result
    resultBox.style.display = "block";


    // Display final score
    finalScore.textContent =
        `Your Score: ${score} / ${questions.length}`;

}


// ==============================
// RESTART QUIZ
// ==============================

restartButton.addEventListener("click", function() {


    // Reset question
    currentQuestion = 0;


    // Reset score
    score = 0;


    // Reset selected answer
    selectedAnswer = null;


    // Hide result
    resultBox.style.display = "none";


    // Show quiz
    quizBox.style.display = "block";


    // Start from Question 1
    showQuestion();

});


// ==============================
// START QUIZ
// ==============================

showQuestion();