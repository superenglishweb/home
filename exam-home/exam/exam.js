import { randomRange } from "../../utils/util.js";
import { diffUnderlineQuestions } from "../../assets/exercise-types/diff-underline.js";
import { stressQuestions } from "../../assets/exercise-types/stress.js";
import { closetQuestions } from "../../assets/exercise-types/closet.js";
import { oppositeQuestions } from "../../assets/exercise-types/opposite.js";
import { bestAnswerQuestions } from "../../assets/exercise-types/best-answer.js";
import { needCorrectingQuestions } from "../../assets/exercise-types/need-correcting.js";
import { correctFormQuestions } from "../../assets/exercise-types/correct-form.js";
import { responseQuestions } from "../../assets/exercise-types/response.js";
import { reading1Questions } from "../../assets/exercise-types/reading1.js";
import { reading2Questions } from "../../assets/exercise-types/reading2.js";
import { rewriteQuestions } from "../../assets/exercise-types/rewrite.js";

// Khởi tạo biến toàn cục
var userAnswers = Array(41).fill(null);
var correctAnswers = Array(41).fill(null);
var answerIds = ['A', 'B', 'C', 'D'];
var point = 0;
var time, time2;
var remainingTime = true;

// Expose functions ra window để HTML gọi được onclick
window.userSelect = userSelect;
window.submitExam = submitExam;
window.showSubmit = showSubmit;
window.hideSubmit = hideSubmit;

// Chạy khởi tạo
createQuestions();
setupTime();

/**
 * Hàm lấy câu hỏi ngẫu nhiên và quản lý lịch sử cho từng loại bài tập
 */
function getQuestionData(source, historyKey) {
    const questionNum = Object.keys(source).length;
    let usedQuestions = JSON.parse(localStorage.getItem(historyKey)) ?? [];

    // Reset nếu đã làm hết kho câu hỏi của phần này
    if (usedQuestions.length >= questionNum) {
        usedQuestions = [];
    }

    const availableNumbers = Array.from({ length: questionNum }, (_, i) => i + 1)
        .filter(num => !usedQuestions.includes(num));

    const index = availableNumbers[randomRange(0, availableNumbers.length - 1)];
    
    usedQuestions.push(index);
    localStorage.setItem(historyKey, JSON.stringify(usedQuestions));
    
    return source[index];
}

/**
 * Hàm render câu hỏi trắc nghiệm chung cho tất cả các phần
 */
function renderPart(containerSelector, questionsObj, startQNum, correctAnswersStartIdx) {
    const container = document.querySelector(containerSelector).querySelector('.mc-questions');
    let html = '';
    
    Object.values(questionsObj).forEach((qData, idx) => {
        const globalIdx = correctAnswersStartIdx + idx;
        const currentQNum = startQNum + idx;
        
        // Lấy dữ liệu câu hỏi
        const questionText = qData.question || "";
        const answersRaw = qData.answers;
        const correctAnswerText = answersRaw[0]; // Đáp án đúng luôn ở vị trí 0 trong file data
        const explain = qData.explain;

        // Xáo trộn đáp án
        const shuffledAnswers = [...answersRaw].sort(() => Math.random() - 0.5);

        html += `
            <div class="mc-question">
                <div class="question">
                    Question ${currentQNum}: ${questionText}
                </div>
        `;

        shuffledAnswers.forEach((ans, i) => {
            const letter = answerIds[i];
            if (ans === correctAnswerText) {
                correctAnswers[globalIdx] = letter;
            }

            html += `
                <div class="mc-answer">
                    <div class="mc-choice-id q${globalIdx} ${letter}" onclick="userSelect(${globalIdx}, '${letter}')">
                        ${letter}
                    </div>
                    <div class="mc-answer-content">${ans}</div>
                    <div class="result-icon q${globalIdx} ${letter}"></div>
                </div>
            `;
        });

        html += `
            </div>
            <div class="explain q${globalIdx} hide">
                <span class="highlight purple">*Explain:</span><br>
                ${explain}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function createQuestions() {
    // I. Pronunciation (Câu 1-2)
    const d1 = getQuestionData(diffUnderlineQuestions, 'history-diff-underline');
    renderPart('.underline-part', d1.mcQuestions, 1, 0);

    // II. Stress (Câu 3-4)
    const d2 = getQuestionData(stressQuestions, 'history-stress');
    renderPart('.stress-part', d2.mcQuestions, 3, 2);

    // III. Closet (Câu 5)
    const d3 = getQuestionData(closetQuestions, 'history-closet');
    renderPart('.closet-part', d3.mcQuestions, 5, 4);

    // IV. Opposite (Câu 6)
    const d4 = getQuestionData(oppositeQuestions, 'history-opposite');
    renderPart('.opposite-part', d4.mcQuestions, 6, 5);

    // V. Best Answer (Câu 7-15)
    const d5 = getQuestionData(bestAnswerQuestions, 'history-best-answer');
    renderPart('.best-answer-part', d5.mcQuestions, 7, 6);

    // VI. Correction (Câu 16-18)
    const d6 = getQuestionData(needCorrectingQuestions, 'history-need-correcting');
    renderPart('.need-correcting-part', d6.mcQuestions, 16, 15);

    // VII. Correct Form (Câu 19-23)
    const d7 = getQuestionData(correctFormQuestions, 'history-correct-form');
    renderPart('.correct-form-part', d7.mcQuestions, 19, 18);

    // VIII. Response (Câu 24-25)
    const d8 = getQuestionData(responseQuestions, 'history-response');
    renderPart('.response-part', d8.mcQuestions, 24, 23);

    // IX. Reading 1 - Cloze test (Câu 26-30)
    const d9 = getQuestionData(reading1Questions, 'history-reading1');
    document.querySelector('.heading-question1').innerHTML = d9.headingQuestion;
    renderPart('.reading1-part', d9.mcQuestions, 26, 25);

    // X. Reading 2 - Comprehension (Câu 31-35)
    const d10 = getQuestionData(reading2Questions, 'history-reading2');
    document.querySelector('.heading-question2').innerHTML = d10.headingQuestion;
    renderPart('.reading2-part', d10.mcQuestions, 31, 30);

    // XI. Rewrite (Câu 36-40)
    const d11 = getQuestionData(rewriteQuestions, 'history-rewrite');
    renderPart('.rewrite-part', d11.mcQuestions, 36, 35);
}

// --- XỬ LÝ TƯƠNG TÁC NGƯỜI DÙNG ---

function userSelect(questionIdx, answer) {
    userAnswers[questionIdx] = answer;
    const choices = document.querySelectorAll(`.mc-choice-id.q${questionIdx}`);
    choices.forEach(choice => choice.classList.remove('chose'));
    const selected = document.querySelector(`.mc-choice-id.q${questionIdx}.${answer}`);
    if (selected) selected.classList.add('chose');
}

function submitExam() {
    remainingTime = false;
    hideSubmit();

    // Khóa tương tác
    document.querySelectorAll('div').forEach(el => el.style.pointerEvents = 'none');
    // Mở khóa các nút quay lại
    const allowList = ['.turn-back-btn', '.allow-turn-back', '.cancel-turn-back', '.turn-back-overlay'];
    allowList.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.style.pointerEvents = 'auto';
    });

    point = 0;
    // Kiểm tra đáp án cho 40 câu (từ index 0 đến 39)
    for (let i = 0; i < 40; i++) {
        if (correctAnswers[i] === null) continue; // Bỏ qua nếu câu đó không tồn tại

        addCorrectHighlight(i, correctAnswers[i]);

        if (!userAnswers[i]) {
            addNotSelectedHighlight(i, correctAnswers[i]);
        } else if (userAnswers[i] !== correctAnswers[i]) {
            addIncorrectHighlight(i, userAnswers[i]);
        } else {
            point += 0.25;
        }

        // Hiện giải thích
        document.querySelectorAll(`.explain.q${i}`).forEach(el => el.classList.remove('hide'));
    }

    // Hiển thị điểm (Làm tròn 2 chữ số)
    document.querySelector('.score').innerHTML = `Score ${point.toFixed(2)} / 10`;

    saveToLocalStorage();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- UTILS HIỂN THỊ KẾT QUẢ ---

function addCorrectHighlight(qIdx, ansId) {
    const el = document.querySelector(`.mc-choice-id.q${qIdx}.${ansId}`);
    const icon = document.querySelector(`.result-icon.q${qIdx}.${ansId}`);
    if (el) el.classList.add('correct');
    if (icon) { icon.innerHTML = '✓'; icon.classList.add('correct'); }
}

function addIncorrectHighlight(qIdx, ansId) {
    const el = document.querySelector(`.mc-choice-id.q${qIdx}.${ansId}`);
    const icon = document.querySelector(`.result-icon.q${qIdx}.${ansId}`);
    if (el) el.classList.add('incorrect');
    if (icon) { icon.innerHTML = 'x'; icon.classList.add('incorrect'); }
}

function addNotSelectedHighlight(qIdx, correctAnsId) {
    const icon = document.querySelector(`.result-icon.q${qIdx}.${correctAnsId}`);
    if (icon) { icon.innerHTML = '?'; icon.classList.add('not-selected'); }
}

function saveToLocalStorage() {
    const now = new Date();
    const timeStr = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()} - ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const examHtml = document.querySelector('.exam').innerHTML;

    const record = {
        name: timeStr,
        point: point.toFixed(2),
        time: (time * 60 - time2),
        exam: examHtml
    };

    let history = JSON.parse(localStorage.getItem('history-english-exams')) || [];
    history.push(record);
    localStorage.setItem('history-english-exams', JSON.stringify(history));
}

// --- UI & TIMER ---

function showSubmit() { document.querySelector('.submit-overlay').classList.remove('hide'); }
function hideSubmit() { document.querySelector('.submit-overlay').classList.add('hide'); }

function setupTime() {
    const params = new URLSearchParams(window.location.search);
    time = parseFloat(params.get('time')) || 45;
    time2 = time * 60;

    const timerInterval = setInterval(() => {
        if (remainingTime) {
            time2--;
            if (time2 <= 0) {
                clearInterval(timerInterval);
                timeRunOut();
            }
            displayTime(time2);
        }
    }, 1000);
}

function displayTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const format = (val) => val < 10 ? '0' + val : val;
    document.querySelector('.time').innerHTML = `${format(h)}:${format(m)}:${format(s)}`;
}

function timeRunOut() {
    document.querySelectorAll('div, input').forEach(el => el.style.pointerEvents = 'none');
    const msg = document.querySelector('.time-run-out');
    msg.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        msg.classList.add('hide');
        document.body.style.overflow = 'auto';
        submitExam();
    }, 2000);
}