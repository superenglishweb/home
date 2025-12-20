function scrollToDiv(target) {
    var element = document.querySelector(`.${target}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
}

let html = `
    <div class="title">Review the knowledge content for the 10th grade entrance exam</div>
`;
var lessons = [
    {
        name: "Phát âm đuôi -ed",
        url: "https://envis.edu.vn/kinh-nghiem/chi-tiet-cach-phat-am-duoi-ed-de-nho.html",
        img: "abc.svg",
    },
    {
        name: "Phát âm đuôi -s",
        url: "https://zim.vn/cac-quy-tac-va-cach-phat-am-duoi-s-es",
        img: "abc.svg",
    },
    {
        name: "Cấu trúc câu",
        url: "https://www.vietjack.com/de-thi-vao-lop-10-mon-tieng-anh/ngu-phap-tieng-anh-trong-tam-thi-vao-10.jsp",
        img: "sentence.svg",
    },
    {
        name: "Câu điều kiện",
        url: "https://ielts-fighter.com/tin-tuc/cau-dieu-kien_mt1563765766.html",
        img: "condition.svg",
    },
    {
        name: "Cách đánh trọng âm",
        url: "https://langmaster.edu.vn/quy-tac-danh-dau-trong-am-co-ban-a72i995.html",
        img: "eye.svg",
    },
    {
        name: "Mẹo chinh phục dạng đọc hiểu",
        url: "https://bigtreeland.vn/tin-tuc/23/bi-kip-chinh-phuc-dang-bai-doc-hieu-tieng-anh",
        img: "read.svg",
    },
    {
        name: "Các thì trong tiếng anh",
        url: "https://qteens.qts.edu.vn/12-thi-trong-tieng-anh/",
        img: "time.svg",
    },
];

// Render lessons
lessons.forEach(lesson => {
    const { name, url, img } = lesson;
    html += `
        <a class="link" href="${url}" target="_blank">
            <img src="assets/images/${img}">
            <div class="link-title">${name}</div>
        </a>
    `;
});
document.querySelector('.learning').innerHTML = html;