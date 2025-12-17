const url = window.location.href;
const params = new URLSearchParams(window.location.search);
const index = params.get('index');

const exams = JSON.parse(localStorage.getItem('history-english-exams'));
let { name, point, time, exam } = exams[index];

document.querySelector('.point')
    .innerHTML = `Score: ${point} / 10`;

document.querySelector('.name-exam')
    .innerHTML = `Exam ending time: ${name}`;

document.querySelector('.time-exam')
    .innerHTML = `
        Time for the exam: 
        ${Math.floor(time / 60)}m${time % 60}s
    `;

document.querySelector('.exam')
    .innerHTML = exam;

    