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
    }
}