import requests
from bs4 import BeautifulSoup
from time import sleep

# Lấy nội dung của trang web
url = "https://vietjack.com/trac-nghiem-tieng-anh/100-cau-trac-nghiem-trong-am-co-dap-an-co-ban.jsp"  # Thay thế bằng URL bạn muốn
response = requests.get(url)

# Phân tích cú pháp HTML
soup = BeautifulSoup(response.text, 'html.parser')

# Tìm tất cả thẻ <p>
p_tags = soup.find_all('p')
    
with open("stress-practice/questions/basic1.js", "w", encoding='utf-8') as g:
    numQues = 0
    g.write("var basic1 = [")
        
    for p in p_tags:
        text = p.text
        print(text, end='------\n')
        if ('Câu' in text):
            numQues += 1
            g.write("{\n")
            g.write(f"    question: 'Question {numQues}',\n    ")
            print(f"Creating question {numQues}")
            
            # write questions
            g.write('answers: [')
            for char in ['A', 'B', 'C', 'D']:
                idx = text.find(char + '.')
                idx += 3
                idx2 = idx
                while (text[idx2] != ' ' and idx2 < len(text) - 1):
                    idx2 += 1
                g.write(f"`{text[idx:idx2].strip()}`,")
            g.write("],\n")
            
        if ('Đáp án' in text and 'Giải thích' not in text):
            print('ok correct')
            idx = text.find('Đáp án')
            idx += 7
            g.write(f"    correct: `{text[idx]}`,\n")
            
        if ('Giải thích' in text):
            print('ok explanation')
            idx = text.find('Giải thích')
            idx += 13
            explanation = text[idx:]
            explanation = explanation.replace('\n', '<br>')
            g.write(f"    explanation: `{explanation}`," + "\n},")
    g.write("];")
        