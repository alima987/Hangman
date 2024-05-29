const quizQuestions = [
    {
        question: 'How many letters in the word hippopotamus?',
        answer: 'TWELVE'
    },
    {
        question: 'What is the national flower of Wales?',
        answer: 'DAFFODIL'
    },
    {
        question: 'Which is the only word in the English language that has no true rhyme?',
        answer: 'ORANGE'
    },
    {
        question: 'What plant do people traditionally kiss under at Christmas?',
        answer: 'MISTLETOE'
    },
    {
        question: 'What nut is used to make marzipan?',
        answer: 'ALMONDS'
    },
    {
        question: 'What vegetable is known as an egg plant in America?',
        answer: 'AUBERGINE'
    },
    {
        question: `What's the Italian word for pie?`,
        answer: 'PIZZA'
    },
    {
        question: `What element does 'O' represent on the periodic table?`,
        answer: 'OXYGEN'
    },
    {
        question: 'What is the smallest planet in our solar system?',
        answer: 'MERCURY'
    },
    {
        question: `What's the name of the river that runs through Egypt?`,
        answer: 'NILE'
    },
]
export { quizQuestions }



/*const updateLetters = (answer) => {
    const answerLength = answer.length;
    wordsLetter.innerHTML = '';

    for (let i = 0; i < answerLength; i++) {
        const li = document.createElement('li');
        li.classList.add('letter');
        wordsLetter.appendChild(li);
    }
};*/

/*const changeQuestion = () => {
    index++
    //index += quizQuestions.length
    index = (index + 1) % quizQuestions.length; 
    question.innerHTML = quizQuestions[index].question
    updateLetters(quizQuestions[index].answer);
}*/

//resetBtn.addEventListener('click', changeQuestion)
//question.innerHTML = quizQuestions[0].question;
//updateLetters(quizQuestions[0].answer)


