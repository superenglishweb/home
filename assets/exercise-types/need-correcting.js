export var needCorrectingQuestions = {
    1: {
        id: 'need-correcting-1',
        mcQuestions: {
            1: {
                question: `
                    Sally <u>and</u> her friends <u>loves</u> going 
                    <u>camping</u> at <u>weekend</u>
                `,
                answers: [
                    `loves`,
                    `and`,
                    `camping`,
                    `weekend`
                ],
                explain: `
                    Kiến thức: Sửa lỗi sai <br>
                    Giải thích: Sally and her friends là chủ ngữ số nhiều => động từ không chia <br>
                    Sửa: loves => love <br>
                    Tạm dịch: Sally và những người bạn của cô ấy thích đi cắm trại vào cuối tuần.
                `
            },

            2: {
                question: `
                    <u>It</u> is one of <u>the</u> most 
                    <u>interestingly</u> books that I have <u>ever</u> read
                `,
                answers: [
                    `interestingly`,
                    `It`,
                    `the`,
                    `ever`
                ],
                explain: `
                    Kiến thức: Sửa lỗi sai <br>
                    Giải thích: “books” là danh từ => đứng trước danh từ là tính từ <br>
                    Sửa: interestingly => interesting <br>
                    Tạm dịch: Đó là một trong những cuốn sách thú vị nhất mà tôi từng đọc.
                `
            },

            3: {
                question: `
                    Although my sister <u>was</u> tired, <u>but</u> she 
                    <u>helped</u> me <u>with</u> my homework
                `,
                answers: [
                    `but`,
                    `was`,
                    `helped`,
                    `with`
                ],
                explain: `
                    Kiến thức: Sửa lỗi sai <br>
                    Giải thích: Cấu trúc “although”: Although + S + V, S + V + O <br>
                    Sửa: bỏ “but <br>
                    Tạm dịch: Mặc dù em gái tôi rất mệt, cô ấy đã giúp tôi làm bài tập về nhà.

                `
            },
        }
    }
}