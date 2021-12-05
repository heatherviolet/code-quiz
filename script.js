let btn = document.createElement("button");
btn.innerHTML = "Start Quiz";
btn.type = "submit";
btn.id = "formBtn";
btn.onclick = function () {
    alert("Button is clicked");
};
document.body.appendChild(btn);

// questions and answers array

var questionsArray = [
        {
            question: "Commonly used data types do NOT include:",
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers",
            answer: "alerts"
        },
        {
            question: "The condition in an if / else statement is enclosed within ______.",
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square backets",
            answer: "parentheses"
        },
            
        {
            question: "Arrays in Javascript can be used to store ______.",
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above",
            answer: "all of the above"
        },
        {
            question: "Sting values must be enclosed within _____ when being assigned to variables.",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses",               
            answer: "quotes"
        },
        question_5 = {
            question: "A very useful tool used during development and degugging for printing content to the debugger is:",
            1: "JavaScript",
            2: "terminal / bash",
            3: "for loops",
            4: "console log",
            answer : "console log"
        }
    ]
    

    