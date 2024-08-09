document.getElementById("send-btn").addEventListener("click", sendMessage);

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();

    if (message !== "") {
        addMessageToChat(message, "user-message");
        userInput.value = "";
        scrollToBottom();
    }
}

function handleQuickReply(reply) {
    addMessageToChat(reply, "user-message");

    if (reply === "من هو مطور عشوائيات لور؟") {
        addMessageToChat('مطور تطبيق عشوائيات لور هو لوفي|لور <a href="https://wa.me/966546999093" target="_blank">+966 54 699 9093</a>', "bot-message");
    } else if (reply === "ماذا يقدم التطبيق!") {
        addMessageToChat('تطبيق عشوائيات لور يقدم العديد من المميزات:\n1- عرض الروايات الخاصه (كتابة الروايات من فريق لور)\n2- العاب تنافسيه\n3- تحديثات واضافات مستمره جديده ومختلفه\n4- شات للتحدث مع الاخرين', "bot-message");
    }

    scrollToBottom();
}

function addMessageToChat(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.className = `message ${className}`;
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
}

function scrollToBottom() {
    const chatBox = document.getElementById("chat-box");
    chatBox.scrollTop = chatBox.scrollHeight;
}
