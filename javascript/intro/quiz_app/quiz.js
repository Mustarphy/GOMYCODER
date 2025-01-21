let questions = [
    {
        question: "Which country has the highest life expectancy?",
        answer: "Hong Kong"
    },
    {
        question: "How many minutes are in a full week?",
        answer: "10,080"
    },
    {
        question: "What software company is headquartered in Redmond, Washington?",
        answer: "Microsoft"
    }
];

let currentQuestion = 0;

document.getElementById('question').innerHTML = questions[currentQuestion].question;

document.getElementById('submit').addEventListener('click', checkAnswer);

function checkAnswer() {
    let userAnswer = document.getElementById('answer').value.toLowerCase();
    let correctAnswer = questions[currentQuestion].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerHTML = 'Correct!';
    } else {
        document.getElementById('result').innerHTML = 'Incorrect. The correct answer is ' + questions[currentQuestion].answer;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        document.getElementById('question').innerHTML = questions[currentQuestion].question;
        document.getElementById('answer').value = '';
        document.getElementById('result').innerHTML = '';
    } else {
        document.getElementById('question').innerHTML = 'Quiz completed!';
        document.getElementById('answer').disabled = true;
        document.getElementById('submit').disabled = true;
    }
}
