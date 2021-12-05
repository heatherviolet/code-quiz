var startButton = document.getElementById("start-btn");

// Start button trigger the first question and next button to display
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});

// questions and answers for the quiz

    const questions = [
        question-1 = {
            textContent: "Commonly used data types do NOT include:",
            options : [
                "strings",
                "booleans",
                "alerts",
                "numbers"
            ],
            answer : "alerts"
        },
        question-2 = {
            textContent: "The ci=ondition in an if / else statement is enclosed within ______."
            options : [
                "quotes",
                "curly brackets",
                "parentheses",
                "square backets"
            ],
            answer : "parentheses"
        },
        question-3 = {
            textContent: "Arrays in Javascript can be used to store ______."
            options: [
                "numbers and strings",
                "other arrays",
                "booleans",
                "all of the above"
            ],
            answer : "all of the above"
        },
        question-4 = {
            textContent: "Sting values must be enclosed within _____ when being assigned to variables."
            options : [
                "commas",
                "curly brackets",
                "quotes",
                "parentheses"               
            ],
            answer: "quotes"
        },
        question_5 = {
            textContent: "A very useful tool used during development and degugging for printing content to the debugger is:",
            options : [
                "JavaScript",
                "terminal / bash",
                "for loops",
                "console log"
            ],
            answer : "console log"
        }
    ];
    init ();