import { randomRange } from "../../utils/util.js";
import { diffUnderlineQuestions } from "../../assets/exercise-types/diff-underline.js";
import { stressQuestions } from "../../assets/exercise-types/stress.js";
import { closetQuestions } from "../../assets/exercise-types/closet.js"
import { oppositeQuestions } from "../../assets/exercise-types/opposite.js";
import { bestAnswerQuestions } from "../../assets/exercise-types/best-answer.js";
import { needCorrectingQuestions } from "../../assets/exercise-types/need-correcting.js";
import { correctFormQuestions } from "../../assets/exercise-types/correct-form.js";
import { responseQuestions } from "../../assets/exercise-types/response.js";
import { reading1Questions } from "../../assets/exercise-types/reading1.js";
import { reading2Questions } from "../../assets/exercise-types/reading2.js";
import { rewriteQuestions } from "../../assets/exercise-types/rewrite.js";


// init
var userAnswers = Array(41);
var correctAnswers = Array(41);
var answerIds = ['A', 'B', 'C', 'D'];
var point = 0;
var time, time2;
var remainingTime = true;

window.userSelect = userSelect;
window.submitExam = submitExam;
window.showSubmit = showSubmit;
window.hideSubmit = hideSubmit;
createQuestions();
setupTime();


function createQuestions() {
    createDiffUnderlineQuestions();
    createStressQuestions();
    createClosetQuestions();
    createOppositeQuestions();
    createBestAnswerQuestions();
    createNeedCorrectingQuestions();
    createCorrectFormQuestions();
    createResponseQuestions();
    createReading1Questions();
    createReading2Questions();
    createRewriteQuestions();
}

function createDiffUnderlineQuestions() {
    // Get diff-underline index
    const questionNum = Object.keys(diffUnderlineQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-diff-underline')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-diff-underline', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = diffUnderlineQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
                <div class="question">
                    Question ${idx + 1}:
                </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx} ${answerIds[idx2]}" onclick="userSelect(${idx}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.underline-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createStressQuestions() {
    // Get stress index
    const questionNum = Object.keys(stressQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-stress')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-stress', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = stressQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
        <div class="mc-question">
        <div class="question">
        Question ${idx + 3}:
        </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 2] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 2} ${answerIds[idx2]}" onclick="userSelect(${idx + 2}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 2} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 2} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.stress-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createClosetQuestions() {
    // Get closet index
    const questionNum = Object.keys(closetQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-closet')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-stress', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = closetQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 5}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 4] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 4} ${answerIds[idx2]}" onclick="userSelect(${idx + 4}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 4} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 4} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.closet-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createOppositeQuestions() {
    // Get opposite index
    const questionNum = Object.keys(oppositeQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-opposite')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-opposite', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = oppositeQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 6}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 5] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 5} ${answerIds[idx2]}" onclick="userSelect(${idx + 5}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 5} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 5} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.opposite-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createBestAnswerQuestions() {
    // Get best-answer index
    const questionNum = Object.keys(bestAnswerQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-best-answer')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-best-answer', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = bestAnswerQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 7}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 6] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 6} ${answerIds[idx2]}" onclick="userSelect(${idx + 6}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 6} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 6} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.best-answer-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createNeedCorrectingQuestions() {
    // Get need-correcting index
    const questionNum = Object.keys(needCorrectingQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-need-correcting')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-need-correcting', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = needCorrectingQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 16}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 15] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 15} ${answerIds[idx2]}" onclick="userSelect(${idx + 15}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 15} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 15} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.need-correcting-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createCorrectFormQuestions() {
    // Get correct form index
    const questionNum = Object.keys(correctFormQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-correct-form')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-correct-form', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = correctFormQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 19}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 18] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 18} ${answerIds[idx2]}" onclick="userSelect(${idx + 18}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 18} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 18} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.correct-form-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createResponseQuestions() {
    // Get response index
    const questionNum = Object.keys(responseQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-response')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-response', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = responseQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 24}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 23] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 23} ${answerIds[idx2]}" onclick="userSelect(${idx + 23}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 23} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 23} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.response-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createReading1Questions() {
    // Get reading1 index
    const questionNum = Object.keys(reading1Questions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-reading1')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-reading1', JSON.stringify(usedQuestions));

    // Render exercise
    var { headingQuestion } = reading1Questions[indexQuestion];
    document.querySelector('.heading-question1')
        .innerHTML = headingQuestion;

    var { mcQuestions } = reading1Questions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 26}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 25] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 25} ${answerIds[idx2]}" onclick="userSelect(${idx + 25}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 25} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 25} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.reading1-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createReading2Questions() {
    // Get reading2 index
    const questionNum = Object.keys(reading2Questions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-reading2')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-reading2', JSON.stringify(usedQuestions));

    // Render exercise
    var { headingQuestion } = reading2Questions[indexQuestion];
    document.querySelector('.heading-question2')
        .innerHTML = headingQuestion;

    var { mcQuestions } = reading2Questions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 31}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 30] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 30} ${answerIds[idx2]}" onclick="userSelect(${idx + 30}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 30} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 30} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.reading2-part').querySelector('.mc-questions')
        .innerHTML = html;
}

function createRewriteQuestions() {
    // Get rewrite index
    const questionNum = Object.keys(rewriteQuestions).length;
    var usedQuestions = JSON.parse(localStorage.getItem('history-rewrite')) ?? [];
    if (usedQuestions.length === questionNum)
        usedQuestions = [];
    var numbers = Array.from({ length: questionNum }, (_, index) => index + 1);
    var availableNumbers = numbers.filter(num => !usedQuestions.includes(num));
    const indexQuestion = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    usedQuestions.push(indexQuestion);
    localStorage.setItem('history-rewrite', JSON.stringify(usedQuestions));

    // Render exercise
    var { mcQuestions } = rewriteQuestions[indexQuestion];
    let html = ``;
    Object.values(mcQuestions).forEach((mcQuestion, idx) => {
        var { question, answers, explain } = mcQuestion;
        var correctAnswer = answers[0];
        answers = [...answers].sort(() => Math.random() - 0.5);
        html += `
            <div class="mc-question">
            <div class="question">
            Question ${idx + 36}: ${question}
            </div>
        `;
        answers.forEach((answer, idx2) => {
            if (answer === correctAnswer) {
                correctAnswers[idx + 35] = answerIds[idx2];
            }
            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${idx + 35} ${answerIds[idx2]}" onclick="userSelect(${idx + 35}, '${answerIds[idx2]}')">
                        ${answerIds[idx2]}
                    </div>
                    <div class="mc-answer-content">${answer}</div>
                    <div class="result-icon q${idx + 35} ${answerIds[idx2]}"></div>
                </div>
                `
        });
        html += `
            </div>
            <div class="explain q${idx + 35} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    document.querySelector('.rewrite-part').querySelector('.mc-questions')
        .innerHTML = html;
}




function userSelect(question, answer) {
    console.log('userSelected');
    userAnswers[question] = answer;
    const choices = document.querySelectorAll(`.mc-choice-id.q${question}`);
    choices.forEach((choice, idx) => {
        choice.classList.remove('chose');
    });
    const choice = document.querySelector(`.mc-choice-id.q${question}.${answer}`);
    choice.classList.add('chose');
}

function submitExam() {
    remainingTime = false;
    hideSubmit();

    // Disable all functions
    document.querySelectorAll('div').forEach(element => {
        element.style.pointerEvents = 'none';
    })

    // Enable turn-back-link
    document.querySelector('.turn-back-btn').style.pointerEvents = 'auto';
    document.querySelector('.allow-turn-back').style.pointerEvents = 'auto';
    document.querySelector('.cancel-turn-back').style.pointerEvents = 'auto';


    var mcQuestionGroups = document.querySelectorAll('.mc-question');
    mcQuestionGroups.forEach((mcQuestionGroup, idx) => {
        console.log(idx);
        var answerElements = mcQuestionGroup.querySelectorAll('.mc-choice-id');
        addCorrect(idx, correctAnswers[idx]);
        if (!userAnswers[idx])
            addNotSelected(idx, correctAnswers[idx]);
        else if (userAnswers[idx] !== correctAnswers[idx])
            addIncorrect(idx, userAnswers[idx]);
        else
            point += 0.25;

        // Show score
        document.querySelector('.score').innerHTML = `
            Score ${point} / 10
        `;

        // --- FIX: .explain là sibling của .mc-question, nên chọn bằng selector toàn cục theo chỉ số câu ---
        document.querySelectorAll(`.explain.q${idx}`).forEach(explain => {
            explain.classList.remove('hide');
        });
    });

    // Save exam
    let html = document.querySelector('.exam').innerHTML;
    const now = new Date();
    let h = now.getHours();
    if (h < 10) h = '0' + h;
    let m = now.getMinutes();
    if (m < 10) m = '0' + m;
    let s = now.getSeconds();
    if (s < 10) s = '0' + s;

    let day = now.getDate();
    if (day < 10) day = '0' + day;
    let month = now.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let year = now.getFullYear();

    const object = {
        name: `${h}:${m}:${s} - ${day}/${month}/${year}`,
        point: point,
        time: (time * 60 - time2),
        exam: html,
    }
    let exams = JSON.parse(localStorage.getItem('history-english-exams'));
    if (exams === null) exams = [];
    exams.push(object);
    localStorage.setItem('history-english-exams', JSON.stringify(exams));

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


function addCorrect(question, answer) {
    var correctAnswer = document.querySelector(`.mc-choice-id.q${question}.${answer}`);
    var resultIcon = document.querySelector(`.result-icon.q${question}.${answer}`);
    console.log(`.mc-choice-id.q${question}.${answer}`);
    correctAnswer.classList.add('correct');
    resultIcon.innerHTML = '✓';
    resultIcon.classList.add('correct');
}

function addIncorrect(question, answer) {
    var incorrectAnswer = document.querySelector(`.mc-choice-id.q${question}.${answer}`);
    var resultIcon = document.querySelector(`.result-icon.q${question}.${answer}`);
    incorrectAnswer.classList.add('incorrect');
    resultIcon.innerHTML = 'x';
    resultIcon.classList.add('incorrect');
}

function addNotSelected(question, answer) {
    var nullAnswer = document.querySelector(`.mc-choice-id.q${question}.${answer}`);
    var resultIcon = document.querySelector(`.result-icon.q${question}.${answer}`);
    nullAnswer.classList.add('not-selected');
    resultIcon.innerHTML = '?';
    resultIcon.classList.add('not-selected');
}

function showSubmit() {
    document.querySelector('.submit-overlay').classList.remove('hide');
}

function hideSubmit() {
    document.querySelector('.submit-overlay').classList.add('hide');
}

function setupTime() {
    // Lấy URL hiện tại
    const url = window.location.href;

    // Tạo một đối tượng URLSearchParams
    const params = new URLSearchParams(window.location.search);

    // Lấy giá trị của tham số "time"
    time = params.get('time') || 0.1;
    time2 = time * 60;
    setInterval(() => {
        if (remainingTime) {
            time2--;
    
            if (time2 === 0) {
                timeRunOut();
            }
    
            const hour = Math.floor(time2 / 3600);
            const minute = Math.floor(time2 / 60) % 60;
            const second = time2 % 60;
            displayTime(hour, minute, second);
        }
    }, 1000);

}

function displayTime(hour, minute, second) {
    if (hour < 10) hour = '0' + hour;
    else if (hour === 0) hour = '00';

    if (minute < 10) minute = '0' + minute;
    else if (minute === 0) minute = '00';

    if (second < 10) second = '0' + second;
    else if (second === 0) second = '00';

    const timeELement = document.querySelector('.time');
    timeELement.innerHTML = `${hour}:${minute}:${second}`;
}

function timeRunOut() {
    // Disabled all div and input
    document.querySelectorAll('div, input').forEach((element) => {
        element.style.pointerEvents = 'none'; // Ngăn mọi tương tác chuột
    });

    const timeRunOut = document.querySelector('.time-run-out');
    timeRunOut.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        timeRunOut.classList.add('hide');
        document.body.style.overflow = 'auto';
    
        submitExam();
    }, 2000);
}

