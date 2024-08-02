const conveMessages = document.querySelector('.convemessages');
const dateOfm = document.querySelector('.dateofm');
const inputMessage = document.querySelector('input[type="text"]'); // Seleciona o campo de entrada de mensagem

function generateRandomMessage() {
  const messages = [
    "Olá, tudo bem? 😄",
    "Estou bem, e você? 😊",
    "Estou ótimo! Que bom te ver por aqui! 😎",
    "O que você está fazendo hoje? 🤔",
    "Estou aprendendo a programar em JavaScript. 🤓",
    "JavaScript é legal! Mas às vezes é meio chato... 😴",
    "Hahaha, concordo! Mas é uma ótima ferramenta. 💪",
    "Você sabe o que é engraçado? 😜",
    "O que? Conta pra mim! 🤩",
    "Aquele meme que você me mandou ontem! 🤣",
    "Ah, aquele? Eu morri de rir! 😂",
    "Tem mais algum meme legal? 😁",
    "Espere só um pouco, vou procurar uns memes hilários! 😉",
    "Não esqueça de me mostrar! 🤭",
    "Prometo! 😄",
    "Mas falando sério, como você está aprendendo a programar? 🤔",
    "Estou usando um site chamado FreeCodeCamp. 👍",
    "Que legal! Eu também adoro aprender coisas novas. 🧠",
    "É muito bom ter a oportunidade de aprender sempre! 🚀",
    "Concordo! A vida é uma jornada de aprendizado. ✨",
    "Você está certo! É importante estar sempre se reinventando. 🔄",
    "E você, o que você está aprendendo? 🤔",
    "Estou aprendendo a ser mais engraçado! 😂",
    "Hahaha, já está bem engraçado! 😅",
    "Obrigado! É que eu quero fazer você rir! 😄",
    "Você está conseguindo! 🤩",
    "Que bom saber! 😉",
    "Então, o que você acha do meu progresso? 🤔",
    "Está ótimo! 👏",
    "Obrigado! 😊"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function createMessage(message, sender, time) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add(sender ? 'senderContainer' : 'receiverContainer', 'arrowm');

  const messageElement = document.createElement('div');
  messageElement.classList.add(sender ? 'sender' : 'reciver', 'mepop');

  const messageContent = document.createElement('div');
  messageContent.classList.add('thereply');
  messageContent.innerHTML = `<p>${message}</p><div class="time"><P>${time}</P></div>`;

  messageElement.appendChild(messageContent);
  messageContainer.appendChild(messageElement);
  conveMessages.appendChild(messageContainer);

  // Toca o som correspondente ao remetente
  playSound(sender ? 'som-whatsap.mp3' : 'som-whatsap1.mp3');

  // Faz o scroll automático para a última mensagem
  conveMessages.scrollTop = conveMessages.scrollHeight;
}

function playSound(soundFile) {
  const audio = new Audio(soundFile);
  audio.play().catch(error => {
    console.error("Erro ao tentar tocar o som:", error);
  });
}

// Restante do código...


function createDate(date) {
  const dateElement = document.createElement('div');
  dateElement.classList.add('dateofm', 'middle');
  dateElement.innerHTML = `<p>${date}</p>`;
  conveMessages.appendChild(dateElement);
}

function simulateConversation() {
  // Cria um timestamp inicial
  let timestamp = new Date().getTime();

  // Cria a data inicial
  createDate(new Date().toLocaleDateString());

  // Função para adicionar uma nova mensagem
  function addMessage() {
    const message = generateRandomMessage();
    const sender = Math.random() < 0.5;

    // Adiciona um novo timestamp para cada mensagem
    timestamp += Math.floor(Math.random() * 60000) + 30000; // 30 a 90 segundos entre as mensagens

    // Formata o timestamp para a hora
    const time = new Date(timestamp).toLocaleTimeString();

    createMessage(message, sender, time);
  }

  // Adiciona a primeira mensagem imediatamente
  addMessage();

  // Chama a função `addMessage()` a cada 2 segundos
  const interval = setInterval(addMessage, 2000);

  // Para o intervalo após 30 mensagens
  setTimeout(() => {
    clearInterval(interval);
  }, 60000); // 30 mensagens x 2 segundos cada = 60 segundos
}

// Adiciona um evento de envio para o campo de entrada de mensagem
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    const message = inputMessage.value;
    const time = new Date().toLocaleTimeString(); // Obtém a hora atual

    // Cria a mensagem do usuário
    createMessage(message, true, time); 

    // Limpa o campo de entrada
    inputMessage.value = '';

    // Toca o som de envio da mensagem
    const audio = new Audio('som-whatsap.mp3');
    audio.play();
  }
});

simulateConversation();