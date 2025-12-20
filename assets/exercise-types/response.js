export var responseQuestions = {
    1: {
        id: 'response-1',
        mcQuestions: {
            1: {
                question: `
                    Joe and Mary are in the art class. <br>
                    - Joe: What a beatiful picture you have painted! <br>
                    - Mary: “_____”
                `,
                answers: [
                    `Thanks. It’s nice of you to say so`,
                    `I don’t like paiting`,
                    `Yes. It’s ugly.`,
                    `Yes. It’s very expensive.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: <br>
                    I don’t like paiting: Tôi không thích vẽ tranh. <br>
                    Thanks. It’s nice of you to say so: Cảm ơn. Thật tuyệt khi bạn nói như vậy. <br>
                    Yes. It’s ugly: Vâng. Nó thật là xấu xí <br>
                    Yes. It’s very expensive: Vâng. Nó rất là đắt tiền. <br>
                    Tạm dịch: Joe và Mary đang học lớp nghệ thuật. <br>
                    - Joe: Bạn đã vẽ một bức tranh đẹp làm sao! <br>
                    - Mary: Cảm ơn. Thật tuyệt khi bạn nói như vậy.
                `
            },

            2: {
                question: `
                    John and Tom are talking about John’s final exam results. <br>
                    - John: “I’ve passed my final exam.” <br>
                    - Tom: “_____”
                `,
                answers: [
                    `Congratulations.`,
                    `That’s a good idea`,
                    `Good luck!`,
                    `It’s very nice of you to say so.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: <br>
                    That’s a good idea: Đó là một ý kiến hay <br>
                    It’s very nice of you to say so: Thật tuyệt khi bạn nói như vậy. <br>
                    Good luck!: Chúc may mắn! <br>
                    Congratulations: Chúc mừng <br>
                    Tạm dịch: John và Tom đang nói về kết quả kỳ thi cuối kỳ của John. <br>
                    - John: “Tôi đã vượt qua kỳ thi cuối kỳ.” <br>
                    - Tom: “Chúc mừng”
                `
            },
        }
    },
    2: {
        id: 'response-2',
        mcQuestions: {
            1: {
                question: `
                    Lien is asking Tung for his opinion. <br>
                    - Lien: “Shall we go to the Japanese club this afternoon?” <br>
                    - Tung: “_____”
                `,
                answers: [
                    `That’s a good idea.`,
                    `You’re welcome.`,
                    `Yes, please.`,
                    `Nice to meet you.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Phản hồi một lời đề nghị (Shall we...). <br>
                    - That’s a good idea: Đó là một ý tưởng hay. <br>
                    Tạm dịch: <br>
                    - Liên: Chiều nay chúng ta đi câu lạc bộ tiếng Nhật nhé? <br>
                    - Tùng: Ý tưởng hay đấy.
                `
            },
            2: {
                question: `
                    Mary is talking to her mother. <br>
                    - Mary: “Let me help you with the washing-up, Mom.” <br>
                    - Mother: “_____”
                `,
                answers: [
                    `That’s very kind of you.`,
                    `No, I don't.`,
                    `You're lucky.`,
                    `Don't mention it.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Phản hồi một lời đề nghị giúp đỡ. <br>
                    - That’s very kind of you: Con thật là tử tế (Cách nhận lời giúp đỡ lịch sự). <br>
                    Tạm dịch: <br>
                    - Mary: Để con giúp mẹ rửa bát nhé. <br>
                    - Mẹ: Con thật là tử tế.
                `
            }
        }
    },
    3: {
        id: 'response-3',
        mcQuestions: {
            1: {
                question: `
                    Peter and Jane are at a party. <br>
                    - Peter: “Would you like a glass of fruit juice?” <br>
                    - Jane: “_____. I’m very thirsty.”
                `,
                answers: [
                    `Yes, please`,
                    `No, thanks`,
                    `Yes, I would`,
                    `No, I wouldn't`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Phản hồi lời mời đồ ăn/thức uống. <br>
                    - Yes, please: Vâng, cho tôi xin (Dựa vào vế sau "Tôi đang rất khát"). <br>
                    Tạm dịch: <br>
                    - Peter: Bạn có muốn một cốc nước trái cây không? <br>
                    - Jane: Vâng, cho tôi xin. Tôi đang khát lắm.
                `
            },
            2: {
                question: `
                    David is apologizing to his teacher. <br>
                    - David: “I’m sorry. I forgot to do my homework.” <br>
                    - Teacher: “_____”
                `,
                answers: [
                    `Don’t let it happen again.`,
                    `I’m fine, thank you.`,
                    `It doesn't matter.`,
                    `You're welcome.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Phản hồi lời xin lỗi trong môi trường giáo dục. <br>
                    - Don’t let it happen again: Đừng để việc đó xảy ra lần nữa nhé. <br>
                    Tạm dịch: <br>
                    - David: Em xin lỗi. Em quên làm bài tập về nhà ạ. <br>
                    - Giáo viên: Đừng để việc đó lặp lại nhé.
                `
            }
        }
    },
    4: {
        id: 'response-4',
        mcQuestions: {
            1: {
                question: `
                    Nam is talking to his classmate. <br>
                    - Nam: “How about going to the cinema tonight?” <br>
                    - Lan: “_____. I have to finish my project.”
                `,
                answers: [
                    `I’m afraid I can’t`,
                    `I’d love to`,
                    `Yes, let’s`,
                    `That sounds great`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Từ chối một lời đề nghị. <br>
                    - I’m afraid I can’t: Mình e là mình không thể (Dựa vào vế sau "Phải hoàn thành dự án"). <br>
                    Tạm dịch: <br>
                    - Nam: Tối nay đi xem phim nhé? <br>
                    - Lan: Mình e là không được rồi. Mình phải làm xong dự án.
                `
            },
            2: {
                question: `
                    Guest: “Can I have some more coffee, please?” <br>
                    - Hostess: “_____”
                `,
                answers: [
                    `Of course. Help yourself.`,
                    `No, you can't.`,
                    `I'm sorry. I'm full.`,
                    `Yes, I'd love to.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Phản hồi yêu cầu lịch sự. <br>
                    - Help yourself: Cứ tự nhiên nhé/Cứ tự phục vụ nhé. <br>
                    Tạm dịch: <br>
                    - Khách: Tôi có thể xin thêm chút cà phê được không? <br>
                    - Chủ nhà: Tất nhiên rồi. Bạn cứ tự nhiên nhé.
                `
            }
        }
    },
    5: {
        id: 'response-5',
        mcQuestions: {
            1: {
                question: `
                    - “Thank you for your help, Peter.” <br>
                    - “_____”
                `,
                answers: [
                    `It was my pleasure.`,
                    `Never mind.`,
                    `Don't mention it.`,
                    `All of them are correct.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Cách đáp lại lời cảm ơn. Cả 3 phương án A, B, C đều có thể dùng để đáp lại lời cảm ơn một cách lịch sự. <br>
                    Tạm dịch: <br>
                    - Cảm ơn vì sự giúp đỡ của bạn, Peter. <br>
                    - Đó là niềm vinh hạnh của tôi / Đừng bận tâm / Không có gì đâu.
                `
            },
            2: {
                question: `
                    - “I’m having an important exam tomorrow.” <br>
                    - “_____”
                `,
                answers: [
                    `Good luck to you!`,
                    `Congratulations!`,
                    `Well done!`,
                    `Cheers!`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Chúc mừng một sự kiện sắp xảy ra. <br>
                    - Good luck: Chúc may mắn. <br>
                    Tạm dịch: <br>
                    - Ngày mai mình có một kỳ thi quan trọng. <br>
                    - Chúc bạn may mắn nhé!
                `
            }
        }
    },
    6: {
        id: 'response-6',
        mcQuestions: {
            1: {
                question: `
                    - “Would you mind if I opened the window?” <br>
                    - “_____”
                `,
                answers: [
                    `No, not at all.`,
                    `Yes, please.`,
                    `Yes, I would.`,
                    `No, I mind.`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Xin phép lịch sự với "Would you mind". Để đồng ý (cho phép), ta dùng "No" (Không, tôi không phiền). <br>
                    - No, not at all: Không, không phiền chút nào đâu. <br>
                    Tạm dịch: <br>
                    - Bạn có phiền nếu tôi mở cửa sổ không? <br>
                    - Không, không phiền đâu.
                `
            },
            2: {
                question: `
                    - “Happy New Year!” <br>
                    - “_____”
                `,
                answers: [
                    `The same to you!`,
                    `You're welcome!`,
                    `The same with you!`,
                    `Many happy returns!`
                ],
                explain: `
                    Kiến thức: Câu giao tiếp <br>
                    Giải thích: Đáp lại lời chúc mừng lễ tết. <br>
                    - The same to you: Bạn cũng vậy nhé! <br>
                    Tạm dịch: <br>
                    - Chúc mừng năm mới! <br>
                    - Bạn cũng vậy nhé!
                `
            }
        }
    }
}