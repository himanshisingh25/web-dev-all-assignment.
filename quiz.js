
const quizQuestions = [
    {
        question: "What device is used to input text into a computer?",
        answer: "Keyboard"
    },
    {
        question: "What does URL stand for?",
        answer: "Uniform Resource Locator"
    },
    {
        question: "Which part of a computer displays visual output ?",
        answer: "Monitor"
    },
    {
        question: "What is the shortcut for copy on Windows?",
        answer: ": Ctrl + C"
    },
    {
        question: "What does OS stand for?",
        answer: "Operating System"
    }
];

function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        
        let currentQuestion = quizQuestions[i];

        
        let userAnswer = prompt(currentQuestion.question);

        
        if (userAnswer === null) {
            userAnswer = "";
        }

        
        let processedInput = userAnswer.toLowerCase().trim();

        
        if (processedInput === currentQuestion.answer) {
            
            score++; 
            alert("Correct! Great job.");
        } else {
            
            alert("Wrong! The correct answer was: " + currentQuestion.answer);
        }
    }

    let finalMessage = "Quiz Over!\n" + 
                       "Your final score is: " + score + " out of " + quizQuestions.length;
    
    alert(finalMessage);
    console.log(finalMessage); 
}

runQuiz();