// Define the rules for responses
const rules = {
    "มีแผนการเรียนอะไรบ้าง": `รายละเอียดแผนการเรียน ระดับชั้นมัธยมศึกษาปีที่ 1 มีแผนการเรียน ดังนี้<br>
    1. <a href="https://www.assumption.ac.th/gifted2023.html" target="_blank">แผนการเรียน Gifted Science & Mathematics Program</a><br>
    2. แผนการเรียน Science & Mathematics Program<br>
    3. แผนการเรียน Digital & Technology Program<br>
    4. แผนการเรียน Chinese & English Program<br>
    5. แผนการเรียน Bell English Program<br>
    6. แผนการเรียน Science & Mathematics English Program<br><br>
    
    รายละเอียดค่าธรรมเนียมการศึกษาระดับชั้นมัธยมศึกษาปีที่ 1 ปีการศึกษา 2567<br>
    <a href="https://www.assumption.ac.th/assets/img/admission/tuitionM1-2024.jpg" target="_blank">คลิกเพื่อดูรายละเอียด</a><br><br>
    
    ระดับชั้นมัธยมศึกษาปีที่ 4 มีแผนการเรียน ดังนี้<br>
    1. แผนการเรียน AC Advanced Science & Mathematics Program<br>
    2. แผนการเรียน AC Pre-Engineering Program<br>
    3. แผนการเรียน AC Health Science Program<br>
    4. แผนการเรียน AC Digital & Technology Program<br>
    5. แผนการเรียน AC Business Administration Program<br>
    6. แผนการเรียน AC Art & Design Program<br>
    7. แผนการเรียน AC Sports Program [นักเรียนต้องผ่านการคัดเลือกในโครงการนักกีฬาทุนของโรงเรียนอัสสัมชัญ]<br>
    8. แผนการเรียน AC French Program<br>
    9. แผนการเรียน AC Chinese Program<br>
    10. โปรแกรมภาษาอังกฤษ (English Program) AC Pre-Engineering English Program<br>
    11. โปรแกรมภาษาอังกฤษ (English Program) AC Health Science English Program<br>
    12. โปรแกรมภาษาอังกฤษ (English Program) AC Business Administration English Program`,
    "อัสสัมชัญตัวย่ออะไร": "AC หรือ Assumption College",
    "name": "I'm your friendly chatbot!",
    "joke": "Why did the robot cross the road? To upgrade to the other side!",
    "what can you do": "I can chat with you and answer basic questions!",
    "bye": "Goodbye! Have a great day!",
    "thanks": "You're welcome!"

};


// Function to send user message and get bot response
function sendMessage() {
    const inputField = document.getElementById("user_input");
    const userMessage = inputField.value.trim();

    if (userMessage) {
        addMessage("You", userMessage, "user-message");

        const botResponse = getBotResponse(userMessage.toLowerCase());

        inputField.value = '';

        setTimeout(() => {
            addMessage("AC assistant", botResponse, "bot-message");
        }, 1000);
    }
}

// Function to check if Enter is pressed
function checkEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

// Function to get the bot response based on user message
function getBotResponse(message) {
    for (const [key, response] of Object.entries(rules)) {
        if (message.includes(key)) {
            return response;
        }
    }
    return "ขอโทษครับผมไม่เข้าใจในคำถาม";
}

// Function to add messages to chatlog
function addMessage(sender, message, className) {
    const chatLog = document.getElementById("chatlog");
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", className);
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(messageElement);
    chatLog.scrollTop = chatLog.scrollHeight;
}

// Function to handle recommended question click
function setRecommendedQuestion(question) {
    const inputField = document.getElementById("user_input");
    inputField.value = question;
    inputField.focus();
}
function setRecommendedQuestion(question) {
    const inputField = document.getElementById("user_input");
    inputField.value = question;
    sendMessage(); // Automatically send the message
}