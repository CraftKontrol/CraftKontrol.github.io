
function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    const userMessage = input.value.trim();

    if (userMessage === '') return;

    // Affiche le message utilisateur
    const userDiv = document.createElement('div');
    userDiv.className = 'message user';
    userDiv.textContent = 'Vous: ' + userMessage;
    chatBox.appendChild(userDiv);

    // Réponse simple du bot
    const botDiv = document.createElement('div');
    botDiv.className = 'message bot';
    botDiv.textContent = 'Bot: ' + getBotResponse(userMessage);
    chatBox.appendChild(botDiv);

    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(message) {
    message = message.toLowerCase();
    if (message.includes('bonjour')) return 'Salut ! Comment puis-je t’aider ?';
    if (message.includes('ça va')) return 'Je vais bien, merci !';
    return 'Je ne comprends pas, peux-tu reformuler ?';
}
