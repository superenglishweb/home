export var rewriteQuestions = {
    1: {
        id: 'rewrite-1',
        mcQuestions: {
            1: {
                question: `“I am trying my best to prepare for the exam,” my brother said.`,
                answers: [
                    `My brother said that he was trying his best to prepare for the exam`,
                    `My brother said to he was trying his best to prepare for the exam`,
                    `My brother said that he is trying his best to prepare for the exam`,
                    `My brother said that he tried his best to prepare for the exam`,
                ],
                explain: `
                    Kiến thức: Viết lại câu <br>
                    Giải thích: <br>
                    - Cấu trúc câu tường thuật: S + say(s)/said hoặc tell(s)/told + (that) + S + V. <br>
                    Tạm dịch: “Tôi đang cố gắng hết sức để chuẩn bị cho kỳ thi,” em trai tôi nói. <br>
                    => Anh trai tôi nói (rằng) anh ấy đang cố gắng hết sức để chuẩn bị cho kỳ thi. <br>
                    Đáp án: My brother said (that) he was trying his best to prepare for the exam.
                `
            },

            2: {
                question: `Peter is too young to drive car.`,
                answers: [
                    `Peter is not old enough to drive a car.`,
                    `Peter is old enough to drive a car.`,
                    `Peter is not enough old to drive a car.`,
                    `Peter is not enough old to drive a car.`,
                ],
                explain: `
                    Kiến thức: Viết lại câu <br>
                    Giải thích: Cấu trúc câu “enough”: S + is/ am/ are + (not) + enough + to + V-infinitive <br>
                    Tạm dịch: Peter còn quá nhỏ để lái ô tô. <br>
                    => Peter chưa đủ tuổi lái ô tô. <br>
                    Đáp án: Peter is not old enough to drive a car.
                `
            },

            3: {
                question: `I don’t have a map, so I can’t show you the way.`,
                answers: [
                    `If I had a map, I could show you the way.`,
                    `If I have a map, I will show you the way.`,
                    `If I had a map, I could have show you the way.`,
                    `I can show you the way if I don't have a map`,
                ],
                explain: `
                    Kiến thức: Viết lại câu <br>
                    Giải thích: <br>
                    - Câu điều kiện loại 2: If + S + V-ed, S + would/ could + V-infinitive <br>
                    Tạm dịch: Tôi không có bản đồ nên không thể chỉ đường cho bạn được. <br>
                    => Nếu tôi có bản đồ, tôi có thể chỉ đường cho bạn. <br>
                    Đáp án: If I had a map, I could show you the way.
                `
            },

            4: {
                question: `He has repaired the roof of my house.`,
                answers: [
                    `The roof of my house has been repaired`,
                    `The roof of my house is repaired`,
                    `The roof of my house have been repaired`,
                    `The roof of my house has been repaired by he`,
                ],
                explain: `
                    Kiến thức: Viết lại câu <br>
                    Giải thích: Câu bị động thì hiện tại hoàn thành: S + has/ have + been + V-ed/ PII <br>
                    Tạm dịch: Anh ấy đã sửa mái nhà của tôi. <br>
                    => Mái nhà của tôi đã được sửa xong. <br>
                    Đáp án: The roof of my house has been repaired
                `
            },

            5: {
                question: `Many people can’t bear the constant noise of the traffic in the city.`,
                answers: [
                    `Many people can’t put up with the constant noise of the traffic in the city`,
                    `Many people can’t turn on the constant noise of the traffic in the city`,
                    `Many people can’t turn off with the constant noise of the traffic in the city`,
                    `Many people can’t break down with the constant noise of the traffic in the city`,
                ],
                explain: `
                    Kiến thức: Đọc hiểu <br>
                    Giải thích: <br>
                    - Cấu trúc: S + can + (not) + V-infinitive <br>
                    Tạm dịch: Nhiều người không thể chịu được tiếng ồn liên tục của giao thông trong thành phố. <br>
                    => Nhiều người không chịu nổi tiếng ồn liên tục của giao thông trong thành phố. <br>
                    Đáp án: Many people can’t put up with the constant noise of the traffic in the city.
                `
            },
        }
    },
    2: {
        id: 'rewrite-2',
        mcQuestions: {
            1: {
                question: `They are going to build a new bridge in this area.`,
                answers: [
                    `A new bridge is going to be built in this area.`,
                    `A new bridge are going to be built in this area.`,
                    `A new bridge is going to build in this area.`,
                    `A new bridge is builded in this area.`
                ],
                explain: `Kiến thức: Câu bị động với "be going to" <br> Công thức: S + be + going to + be + V3/ed. <br> Tạm dịch: Họ sẽ xây một cây cầu mới ở khu vực này. => Một cây cầu mới sẽ được xây dựng ở khu vực này.`
            },
            2: {
                question: `“Do you like pop music?” Nam asked me.`,
                answers: [
                    `Nam asked me if I liked pop music.`,
                    `Nam asked me if I like pop music.`,
                    `Nam asked me did I like pop music.`,
                    `Nam asked me if you liked pop music.`
                ],
                explain: `Kiến thức: Câu tường thuật (Câu hỏi Yes/No) <br> Công thức: S + asked + (O) + if/whether + S + V (lùi thì). <br> Tạm dịch: Nam hỏi tôi: "Bạn có thích nhạc pop không?" => Nam hỏi tôi liệu tôi có thích nhạc pop không.`
            }
        }
    },
    3: {
        id: 'rewrite-3',
        mcQuestions: {
            1: {
                question: `I haven't met my old teacher for two years.`,
                answers: [
                    `The last time I met my old teacher was two years ago.`,
                    `I last met my old teacher for two years.`,
                    `I didn't meet my old teacher two years ago.`,
                    `It is two years since I have met my old teacher.`
                ],
                explain: `Kiến thức: Biến đổi Hiện tại hoàn thành sang Quá khứ đơn <br> Công thức: S + haven't + V3 + for [time] <=> The last time + S + V2 + was [time] + ago. <br> Tạm dịch: Đã 2 năm rồi tôi không gặp giáo viên cũ.`
            },
            2: {
                question: `No one in my class is taller than Long.`,
                answers: [
                    `Long is the tallest student in my class.`,
                    `Long is taller than no one in my class.`,
                    `Long is as tall as everyone in my class.`,
                    `Long is the most tall student in my class.`
                ],
                explain: `Kiến thức: So sánh nhất <br> Giải thích: Không ai cao hơn Long => Long là người cao nhất. <br> Công thức so sánh nhất với tính từ ngắn: S + be + the + adj-est.`
            }
        }
    },
    4: {
        id: 'rewrite-4',
        mcQuestions: {
            1: {
                question: `It's a pity I can't speak English as fluently as a native speaker.`,
                answers: [
                    `I wish I could speak English as fluently as a native speaker.`,
                    `I wish I can speak English as fluently as a native speaker.`,
                    `I wish I couldn't speak English as fluently as a native speaker.`,
                    `I wish I spoke English more fluently than a native speaker.`
                ],
                explain: `Kiến thức: Câu ước (Wish) ở hiện tại <br> Công thức: S + wish(s) + S + V2/ed. <br> Tạm dịch: Thật đáng tiếc tôi không thể nói tiếng Anh trôi chảy... => Tôi ước tôi có thể nói...`
            },
            2: {
                question: `Because of the heavy rain, we couldn't go for a picnic.`,
                answers: [
                    `Because it rained heavily, we couldn't go for a picnic.`,
                    `Because it rain heavy, we couldn't go for a picnic.`,
                    `Although it rained heavily, we went for a picnic.`,
                    `Because of it rained heavily, we couldn't go for a picnic.`
                ],
                explain: `Kiến thức: Biến đổi Because of sang Because <br> Công thức: Because of + N/V-ing <=> Because + Clause (S + V). <br> Chú ý: Cụm danh từ "heavy rain" chuyển thành mệnh đề "it rained heavily".`
            }
        }
    },
    5: {
        id: 'rewrite-5',
        mcQuestions: {
            1: {
                question: `“Why don't we go to the beach this weekend?” said Peter.`,
                answers: [
                    `Peter suggested going to the beach that weekend.`,
                    `Peter suggested to go to the beach this weekend.`,
                    `Peter suggested we should go to the beach this weekend.`,
                    `Peter asked why we don't go to the beach.`
                ],
                explain: `Kiến thức: Cấu trúc gợi ý với Suggest <br> Công thức: S + suggested + V-ing. <br> Lưu ý: "this weekend" phải chuyển thành "that weekend" trong câu tường thuật.`
            },
            2: {
                question: `The book is so interesting that I have read it twice.`,
                answers: [
                    `It is such an interesting book that I have read it twice.`,
                    `It is so an interesting book that I have read it twice.`,
                    `The book is too interesting for me to read twice.`,
                    `It is such interesting book that I have read it twice.`
                ],
                explain: `Kiến thức: Cấu trúc So/Such...that <br> Công thức: S + be + so + adj + that... <=> It + be + such + (a/an) + adj + N + that...`
            }
        }
    },
    6: {
        id: 'rewrite-6',
        mcQuestions: {
            1: {
                question: `He started working as a doctor ten years ago.`,
                answers: [
                    `He has worked as a doctor for ten years.`,
                    `He has started working as a doctor for ten years.`,
                    `He has been a doctor since ten years.`,
                    `He worked as a doctor for ten years.`
                ],
                explain: `Kiến thức: Biến đổi Quá khứ đơn sang Hiện tại hoàn thành <br> Công thức: S + started + V-ing + [time] + ago <=> S + have/has + V3/ed + for [time].`
            },
            2: {
                question: `You should study harder or you will fail the exam.`,
                answers: [
                    `If you don't study harder, you will fail the exam.`,
                    `If you study harder, you will fail the exam.`,
                    `Unless you study harder, you won't fail the exam.`,
                    `If you didn't study harder, you would fail the exam.`
                ],
                explain: `Kiến thức: Câu điều kiện loại 1 <br> Giải thích: Bạn nên học chăm hơn nếu không sẽ trượt => Nếu bạn không học chăm hơn, bạn sẽ trượt.`
            }
        }
    }
}