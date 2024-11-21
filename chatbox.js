// ฟังก์ชันส่งข้อความ
async function sendMessage() {
    const userInput = document.getElementById("user_input").value.trim();
    
    if (userInput) {
        
        // แสดงข้อความที่ผู้ใช้ส่ง
        document.getElementById("chatlog").innerHTML += `<div><strong>คุณ:</strong> ${userInput}</div>`;
        document.getElementById("user_input").value = ''; // ล้างช่อง input

        // ส่งคำถามไปยัง OpenAI API
        try {
            const response = await fetch('https://api.openai.com/v1/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer YOUR_API_KEY`,  // ใส่ API key ที่คุณได้จาก OpenAI
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [{ role: "user", content: userInput }],
                    max_tokens: 150,
                }),
            });

            const data = await response.json();
            const aiResponse = data.choices[0].message.content;

            // แสดงคำตอบจาก AI
            document.getElementById("chatlog").innerHTML += `<div><strong>AI:</strong> ${aiResponse}</div>`;
            document.getElementById("chatlog").scrollTop = document.getElementById("chatlog").scrollHeight; // เลื่อนหน้าให้แสดงข้อความใหม่
        } catch (error) {
            console.error("Error fetching AI response:", error);
            document.getElementById("chatlog").innerHTML += `<div><strong>AI:</strong> ขอโทษครับ/ค่ะ, เกิดข้อผิดพลาดในการเชื่อมต่อ.</div>`;
        }
    }
}

// ฟังก์ชันตรวจจับการกดปุ่ม Enter
function checkEnter(event) {
    if (event.key === "Enter") { // ตรวจสอบว่าเป็น Enter
        event.preventDefault();  // ป้องกันไม่ให้ข้อความถูกส่งเมื่อกด Enter
        sendMessage(); // ส่งข้อความ
    }
}
// fuction recommand question
