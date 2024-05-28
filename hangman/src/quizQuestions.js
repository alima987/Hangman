const hint = document.getElementById('hint');
const reset = document.getElementById('reset');
const words = document.getElementById('words');
const wordsLetter = document.getElementById('word_letter');

const quizQuestions = [
    {
        question: 'How many letters in the word hippopotamus?',
        answer: 'Twelve'
    },
    {
        question: 'What is the national flower of Wales?',
        answer: 'Daffodil'
    },
    {
        question: 'Which is the only word in the English language that has no true rhyme?',
        answer: 'Orange'
    },
    {
        question: 'What plant do people traditionally kiss under at Christmas?',
        answer: 'Mistletoe'
    },
    {
        question: 'What nut is used to make marzipan?',
        answer: 'Almonds'
    },
    {
        question: 'What vegetable is known as an egg plant in America?',
        answer: 'Aubergine'
    },
    {
        question: `What's the Italian word for pie?`,
        answer: 'Pizza'
    },
    {
        question: `What element does 'O' represent on the periodic table?`,
        answer: 'Oxygen'
    },
    {
        question: 'What is the smallest planet in our solar system?',
        answer: 'Mercury'
    },
    {
        question: `What's the name of the river that runs through Egypt?`,
        answer: 'Nile'
    },
]

    const index = 0
    const question = document.createElement('p');
    question.classList.add('question')
    hint.appendChild(question)

const resetBtn = document.createElement('button')
resetBtn.classList.add('resetBtn')
resetBtn.textContent = 'Play Again'
reset.appendChild(resetBtn)

const updateLetters = (answer) => {
    const answerLength = answer.length;
    // Clear existing letters
    wordsLetter.innerHTML = '';

    // Add new letters
    for (let i = 0; i < answerLength; i++) {
        const li = document.createElement('li');
        li.classList.add('letter');
        wordsLetter.appendChild(li);
    }
};
    console.log(updateLetters(length))
const changeQuestion = () => {
    index++
    //index += quizQuestions.length
    index = (index + 1) % quizQuestions.length; 
    question.innerHTML = quizQuestions[index].question
    updateLetters(quizQuestions[index].answer);
}
/*const wordsLetter = document.createElement('ul')
wordsLetter.id = "word_letter"
words.appendChild(wordsLetter)*/


resetBtn.addEventListener('click', changeQuestion)
question.innerHTML = quizQuestions[0].question;
updateLetters(quizQuestions[0].answer)


