import { randomRange } from '../utils/util.js';
import { contests } from '../assets/exercise-types/listening.js';

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

const contestNum = Object.keys(contests).length;
var usedContests = JSON.parse(localStorage.getItem('history-listen')) ?? [];
if (usedContests.length === contestNum)
    usedContests = [];
var numbers = Array.from({ length: contestNum }, (_, index) => index + 1);
var availableNumbers = numbers.filter(num => !usedContests.includes(num));
const indexContest = availableNumbers[randomRange(0, availableNumbers.length - 1)];
usedContests.push(indexContest);
localStorage.setItem('history-listen', JSON.stringify(usedContests));

document.querySelector('audio').innerHTML = `
    <source src="../assets/sounds/listen${indexContest}.mp3" type="audio/mp3">
    Trình duyệt của bạn không hỗ trợ thẻ audio.
`;

var contest = contests[indexContest];
var { mcQuestions, paragraph } = contest;

var correctAnswersMc = [];
var correctAnswersFb = [];

var questionNumMc;
var questionNumFb;

var userAnswersMc;
var userAnswersFb;

var answerIds = ['A', 'B', 'C', 'D'];

var point = 0;

if (mcQuestions) {
    questionNumMc = Object.keys(mcQuestions).length;
    userAnswersMc = Array(questionNumMc);

    let html = `
        
            
        <div class="mc-questions">
    `;

    Object.values(mcQuestions).forEach((mcQuestion, id) => {
        var { question, answers } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);

        html += `
            <div class="mc-question q${id + 1}">
                <div class="mc-question-id">Question ${id + 1}:</div>
                <div class="mc-question-name">${question}</div>
        `;
        answers.forEach((answer, id2) => {
            if (answer === correctAnswer)
                correctAnswersMc.push(answerIds[id2]);
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
            </div>
        `;
    });
    html += `
        </div>
    `;

    document.querySelector('.mc-questions')
        .innerHTML = html;
    document.querySelector('.paragraph')    
        .innerHTML = '--Transcript-- <br>' + paragraph;
}

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

    // Get user fill-blank answers
    for (let i = 1; i <= questionNumFb; i++) {
        const input = document.querySelector(`.fb-answer.q${i}`).value;
        userAnswersFb[i - 1] = input;
    }

    // Compare mc-exercise
    for (let i = 0; i < questionNumMc; i++) {
        if (userAnswersMc[i] === correctAnswersMc[i])
            point++;
    }

    // Compare fill-blank-exercise
    for (let i = 0; i < questionNumFb; i++) {
        if (userAnswersFb[i] === correctAnswersFb[i])
            point++;
    }

    // Display score
    document.querySelector('.score')
        .innerHTML = `Score: ${point} / ${questionNumMc}`;

    console.log(userAnswersMc);
    console.log(correctAnswersMc);
    console.log(userAnswersFb);
    console.log(correctAnswersFb);

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

    document.querySelector('.paragraph').classList.remove('hide');

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}