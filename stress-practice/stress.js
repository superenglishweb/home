import { randomRange } from '../utils/util.js';
import { basic1 } from './questions/basic1.js';

// Show guide
function showGuide() {
    document.querySelector('.guide-overlay').classList.remove('hide');
}
showGuide();

// Hide guide
function hideGuide() {
    document.querySelector('.guide-overlay').classList.add('hide');
}

// Show submit
function showSubmit() {
    document.querySelector('.submit-overlay').classList.remove('hide');
}

// Hide submit
function hideSubmit() {
    document.querySelector('.submit-overlay').classList.add('hide');
}

var contests = basic1;
var questions = [];
var questionNumMc = contests.length;

var questionNumMc = 10;
var usedIds = JSON.parse(localStorage.getItem('history-stress-exercise')) ??[];
if (contests.length - usedIds.length < questionNumMc) {
    usedIds = [];
}
var remainingIds = contests.filter((contest, id) => !usedIds.includes(id));

for (let i = 0; i < questionNumMc; i++) {
    let randomIndex = randomRange(0, remainingIds.length - 1);
    usedIds.push(remainingIds[randomIndex]);
    questions.push(contests[randomIndex]);
    remainingIds.splice(randomIndex, 1);
}
localStorage.setItem('history-stress-exercise', JSON.stringify(usedIds));
contests = questions;


var correctAnswersMc = [];
var userAnswersMc;
var answerIds = ['A', 'B', 'C', 'D'];
var point = 0;
var maxPoint = contests.length;

// Render questions
userAnswersMc = Array(questionNumMc);

let html = `
    <div class="mc-questions">
`;

contests.forEach((mcQuestion, id) => {
    var { question, answers, correct, explanation } = mcQuestion;
    correctAnswersMc.push(correct);

    html += `
        <div class="mc-question q${id + 1}">
            <div class="mc-question-id">Question ${id + 1}:</div>
            <div class="mc-question-name"></div>
    `;
    answers.forEach((answer, id2) => {
        html += `
            <div class="mc-answer-container">
                <div class="mc-choice-id q${id + 1} ${answerIds[id2]}" onclick="
                    userSelect(${id}, '${answerIds[id2]}');
                ">${answerIds[id2]}</div>
                <div class="mc-choice-content">${answer}</div>
                <div class="result-icon q${id + 1} ${answerIds[id2]}"></div>
            </div>
            `;
        });
        
    html += `
        <div class="explanation hide">${explanation}</div>
        </div>
    `;
});
html += `
    </div>
`;

document.querySelector('.mc-questions')
    .innerHTML = html;

window.userSelect = userSelect;
window.submitExam = submitExam;
window.hideGuide = hideGuide;
window.showGuide = showGuide;
window.hideSubmit = hideSubmit;
window.showSubmit = showSubmit;

// Add event click
const mcQuestionElement = document.querySelectorAll('.mc-question');
mcQuestionElement.forEach((mcQuestion, index) => {
    const choiceIds = mcQuestion.querySelectorAll('.mc-choice-id');
    choiceIds.forEach((choiceId) => {
        choiceId.addEventListener('click', () => {
            choiceIds.forEach(element => {
                element.classList.remove('chose');
            })

            choiceId.classList.add('chose');
        });
    });
});

function userSelect(question, answer) {
    userAnswersMc[question] = answer;
}

function submitExam() {
    hideSubmit();

    // Disabled all div and input
    document.querySelectorAll('div, input').forEach((element) => {
        element.style.pointerEvents = 'none'; // Ngăn mọi tương tác chuột
    });

    // Enabled turn back btn
    document.querySelector('.turn-back-btn').style.pointerEvents = 'auto';

    // Compare mc-exercise
    for (let i = 0; i < questionNumMc; i++) {
        if (userAnswersMc[i] === correctAnswersMc[i])
            point++;
    }

    // Display score
    document.querySelector('.score')
        .innerHTML = `Score: ${point} / ${maxPoint}`;

    console.log(userAnswersMc);
    console.log(correctAnswersMc);

    // Show correct, incorrect and null answer
    // Mc Questions
    mcQuestionElement.forEach((mcQuestion, index) => {
        const choiceIds = mcQuestion.querySelectorAll('.mc-choice-id');
        choiceIds.forEach((choiceId) => {
            let id = choiceId.innerHTML;
            if (correctAnswersMc[index] === id) {
                choiceId.classList.add('correct');
                var resultIcon = document.querySelector(`.result-icon.q${index + 1}.${id}`);
                if (userAnswersMc[index] === id) {
                    // Correct user answer
                    resultIcon.classList.add('correct');
                    resultIcon.innerHTML = '✓';
                } else if (userAnswersMc[index]) {
                    // Incorrect user answer
                    resultIcon.classList.add('correct');
                    resultIcon.innerHTML = '✓';

                    var incorrectChoice = document.querySelector(`.mc-choice-id.q${index + 1}.${userAnswersMc[index]}`);
                    incorrectChoice.classList.add('incorrect');
                    resultIcon = document.querySelector(`.result-icon.q${index + 1}.${userAnswersMc[index]}`);
                    resultIcon.classList.add('incorrect');
                    resultIcon.innerHTML = 'x';
                } else {
                    // User not selected
                    resultIcon.classList.add('not-selected');
                    resultIcon.innerHTML = '?';
                }
            }
        });
    });

    // Show explanation
    document.querySelectorAll('.explanation').forEach(explanation => {
        explanation.classList.remove('hide');
    });

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}