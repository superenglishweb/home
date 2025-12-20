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
    },
    2: {
        id: 'need-correcting-2',
        mcQuestions: {
            1: {
                question: `The <u>children</u> <u>is</u> playing <u>soccer</u> in the <u>park</u> now.`,
                answers: [`is`, `children`, `soccer`, `park`],
                explain: `Kiến thức: Sự hòa hợp S-V <br> Giải thích: "The children" là danh từ số nhiều => động từ tobe phải là "are". <br> Sửa: is => are <br> Tạm dịch: Lũ trẻ đang chơi bóng đá ở công viên bây giờ.`
            },
            2: {
                question: `If <u>it</u> <u>rains</u> tomorrow, we <u>would</u> <u>stay</u> at home.`,
                answers: [`would`, `it`, `rains`, `stay`],
                explain: `Kiến thức: Câu điều kiện loại 1 <br> Giải thích: Vế chính của câu điều kiện loại 1 dùng "will", không dùng "would". <br> Sửa: would => will <br> Tạm dịch: Nếu ngày mai trời mưa, chúng tôi sẽ ở nhà.`
            },
            3: {
                question: `The <u>man</u> <u>which</u> <u>lives</u> next door is a <u>famous</u> doctor.`,
                answers: [`which`, `man`, `lives`, `famous`],
                explain: `Kiến thức: Đại từ quan hệ <br> Giải thích: "The man" là người, nên dùng đại từ quan hệ "who" thay vì "which". <br> Sửa: which => who <br> Tạm dịch: Người đàn ông sống cạnh nhà tôi là một bác sĩ nổi tiếng.`
            }
        }
    },
    3: {
        id: 'need-correcting-3',
        mcQuestions: {
            1: {
                question: `She <u>has</u> <u>studied</u> English <u>since</u> five <u>years</u>.`,
                answers: [`since`, `has`, `studied`, `years`],
                explain: `Kiến thức: Giới từ chỉ thời gian <br> Giải thích: "five years" là một khoảng thời gian => dùng "for", không dùng "since". <br> Sửa: since => for <br> Tạm dịch: Cô ấy đã học tiếng Anh được 5 năm rồi.`
            },
            2: {
                question: `The <u>film</u> <u>was</u> <u>so</u> bored <u>that</u> I fell asleep.`,
                answers: [`bored`, `film`, `so`, `that`],
                explain: `Kiến thức: Tính từ đuôi -ed/-ing <br> Giải thích: Mô tả đặc điểm của vật (bộ phim) phải dùng tính từ đuôi -ing. <br> Sửa: bored => boring <br> Tạm dịch: Bộ phim chán đến nỗi tôi đã ngủ quên.`
            },
            3: {
                question: `He <u>suggested</u> <u>to go</u> <u>to</u> the <u>cinema</u> tonight.`,
                answers: [`to go`, `suggested`, `to`, `cinema`],
                explain: `Kiến thức: Cấu trúc với Suggest <br> Giải thích: Suggest + V-ing. <br> Sửa: to go => going <br> Tạm dịch: Anh ấy đề nghị đi xem phim tối nay.`
            }
        }
    },
    4: {
        id: 'need-correcting-4',
        mcQuestions: {
            1: {
                question: `My <u>father</u> <u>used to</u> <u>taking</u> me <u>to</u> school.`,
                answers: [`taking`, `father`, `used to`, `to`],
                explain: `Kiến thức: Cấu trúc Used to <br> Giải thích: Used to + V-infinitive (nguyên thể). <br> Sửa: taking => take <br> Tạm dịch: Bố tôi đã từng thường xuyên đưa tôi đến trường.`
            },
            2: {
                question: `English <u>is</u> <u>spoke</u> <u>all</u> over <u>the</u> world.`,
                answers: [`spoke`, `is`, `all`, `the`],
                explain: `Kiến thức: Câu bị động <br> Giải thích: Câu bị động thì hiện tại đơn: be + V3/ed. <br> Sửa: spoke => spoken <br> Tạm dịch: Tiếng Anh được nói trên toàn thế giới.`
            },
            3: {
                question: `She <u>is</u> <u>the</u> most <u>beautifully</u> girl <u>in</u> my class.`,
                answers: [`beautifully`, `is`, `the`, `in`],
                explain: `Kiến thức: Tính từ và trạng từ <br> Giải thích: Bổ nghĩa cho danh từ "girl" phải là tính từ. <br> Sửa: beautifully => beautiful <br> Tạm dịch: Cô ấy là cô gái xinh đẹp nhất lớp tôi.`
            }
        }
    },
    5: {
        id: 'need-correcting-5',
        mcQuestions: {
            1: {
                question: `I <u>wish</u> I <u>can</u> <u>speak</u> Japanese <u>fluently</u>.`,
                answers: [`can`, `wish`, `speak`, `fluently`],
                explain: `Kiến thức: Câu ước <br> Giải thích: Câu ước ở hiện tại: S + wish + S + V2/ed (can => could). <br> Sửa: can => could <br> Tạm dịch: Tôi ước tôi có thể nói tiếng Nhật trôi chảy.`
            },
            2: {
                question: `<u>Despite</u> it <u>was</u> raining, <u>they</u> went <u>out</u>.`,
                answers: [`Despite`, `was`, `they`, `out`],
                explain: `Kiến thức: Liên từ <br> Giải thích: "it was raining" là một mệnh đề => dùng "Although". <br> Sửa: Despite => Although <br> Tạm dịch: Mặc dù trời mưa, họ vẫn đi ra ngoài.`
            },
            3: {
                question: `The <u>news</u> <u>I</u> heard <u>yesterday</u> <u>were</u> very exciting.`,
                answers: [`were`, `news`, `I`, `yesterday`],
                explain: `Kiến thức: Danh từ không đếm được <br> Giải thích: "News" là danh từ không đếm được, luôn đi với động từ số ít. <br> Sửa: were => was <br> Tạm dịch: Tin tức tôi nghe được hôm qua rất thú vị.`
            }
        }
    },
    6: {
        id: 'need-correcting-6',
        mcQuestions: {
            1: {
                question: `He <u>asked</u> me <u>what</u> <u>was my name</u> <u>then</u>.`,
                answers: [`was my name`, `asked`, `what`, `then`],
                explain: `Kiến thức: Câu tường thuật <br> Giải thích: Trong câu tường thuật, trật tự từ trong câu hỏi phải là S + V (không đảo ngữ). <br> Sửa: was my name => my name was <br> Tạm dịch: Anh ấy hỏi tôi tên là gì.`
            },
            2: {
                question: `We <u>are</u> <u>looking</u> forward <u>to</u> <u>meet</u> you again.`,
                answers: [`meet`, `are`, `looking`, `to`],
                explain: `Kiến thức: Cấu trúc V-ing <br> Giải thích: Look forward to + V-ing. <br> Sửa: meet => meeting <br> Tạm dịch: Chúng tôi rất mong được gặp lại bạn.`
            },
            3: {
                question: `<u>Because of</u> <u>he</u> was <u>ill</u>, he <u>stayed</u> in bed.`,
                answers: [`Because of`, `he`, `ill`, `stayed`],
                explain: `Kiến thức: Liên từ <br> Giải thích: "he was ill" là một mệnh đề => dùng "Because". <br> Sửa: Because of => Because <br> Tạm dịch: Vì anh ấy bị ốm, anh ấy đã nằm nghỉ trên giường.`
            }
        }
    }
}