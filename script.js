const quizData = [
    {
        question: "Was ist der erste Planet, wenn wir ihn von der Erde betrachten?",
        options: ["Venus", "Mars", "Jupiter", "Erde"],
        answer: "Mars"
    },
    {
        question: "Welches Tier ist dafür bekannt, den Eiffelturm in Paris zu erklimmen?",
        options: ["Affe", "Elefant", "Giraffe", "Löwe"],
        answer: "Affe"
    },
    {
        question: "Welcher Fluss ist der längste der Welt?",
        options: ["Amazonas", "Mississippi", "Jangtse", "Nil"],
        answer: "Nil"
    },
    {
        question: "Welcher Planet in unserem Sonnensystem ist bekannt für seine markanten Ringe?",
        options: ["Mars", "Saturn", "Jupiter", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "Welche dieser Städte ist die Hauptstadt von Deutschland?",
        options: ["Berlin", "München", "Hamburg", "Köln"],
        answer: "Berlin"
    },
    {
        question: "Wie nennt man die kleinsten Bausteine eines Elements?",
        options: ["Atome", "Moleküle", "Protonen", "Elektronen"],
        answer: "Atome"
    },
    {
        question: "Welches Land wird auch als das Land der aufgehenden Sonne bezeichnet?",
        options: ["China", "Indien", "Japan", "Australien"],
        answer: "Japan"
    },
    {
        question: "Welcher Planet in unserem Sonnensystem ist bekannt für seine markanten Ringe?",
        options: ["Mars", "Saturn", "Jupiter", "Uranus"],
        answer: "Saturn"
    },
    {
        question: "Welcher Ozean liegt zwischen Nordamerika und Europa?",
        options: ["Atlantischer Ozean", "Pazifischer Ozean", "Indscher Ozean", "Arktischer Ozean"],
        answer: "Atlantischer Ozean"
    },
    {
        question: "Wie nennt man den Prozess, bei dem Wasser von einer Flüssigkeit zu einem Gas wird?",
        options: ["Verdunstung", "Verdichtung", "Kondensation", "Sublimation"],
        answer: "Verdunstung"
    },
    {
        question: "Welcher dieser Planeten ist der kleinste in unserem Sonnensystem?",
        options: ["Mars", "Merkur", "Venus", "Pluto"],
        answer: "Merkur"
    },
    {
        question: "Welche dieser Farben ist eine Primärfarbe?",
        options: ["Lila", "Grün", "Gelb", "Rosa"],
        answer: "Gelb"
    },
    {
        question: "Welche der folgenden Zahlen ist eine ungerade Primzahl?",
        options: ["8", "11", "14", "16"],
        answer: "11"
    },
    {
        question: "Was ist die Hauptaufgabe des Herzens im menschlichen Körper?",
        options: ["Atmen", "Verauen", "Pumpen von Blut", "Denken"],
        answer: "Pumpen von Blut"
    },
    {
        question: "Wie nennt man das größte Tier, das jemals auf der Erde gelebt hat?",
        options: ["Dino(saurier)", "Elefant", "Blauwal", "Giraffe"],
        answer: "Blauwal"
    },
    // Add more questions here
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.innerText = option;
        optionButton.classList.add('option');
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        alert("Correct!");
    } else {
        alert("Wrong answer. Try again.");
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
        // You can add more actions here after the quiz is completed
    }
}

submitButton.addEventListener('click', showQuestion);

showQuestion();
