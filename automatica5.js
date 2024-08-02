document.getElementById('start').addEventListener('click', () => {
  simulateConversation();
});

const conveMessages = document.querySelector('.convemessages');
const inputMessage = document.querySelector('input[type="text"]');

// Mensagens fixas e sequência
const predefinedMessages = [
  "Olá, tudo bem? 😄",
  "Oi! Tudo ótimo, e você? 😊",
  "Estou bem! Mano descobri que sou movido a café, uns bons cafés e sai código com criatividade! 😆",
  "Haha, boa falando de café! Mas olha, eu queria mesmo era saber se você gostaria de sair para um café algum dia desses ☕️",
  "Ah, eu adoraria, mas vou te confessar que tô empolgado com uma parada que tô fazendo! 😅",
  "Poxa, entendo! Mas talvez possamos encontrar uma oportunidade em um futuro próximo. 😉",
  "Quem sabe? Pode ser que eu tenha um tempo livre em 2025... ou depois que eu terminar o meu curso de programação! 😂",
  "Curso de programação, hein? Isso é algo que me interessa! Aliás, falando nisso, você não vai acreditar na novidade: eu acabei de ganhar uma promoção no trabalho! 🚀",
  "Uau, que incrível! E como isso aconteceu?",
  "Bom, eu fui promovido porque o meu chefe ficou impressionado com minhas habilidades em inteligência artificial e automação de tarefas! 🧠💻",
  "Sério? Que fantástico! E como foi isso?",
  "Foi um daqueles momentos em que você sente que tudo valeu a pena. Com o conhecimento de IA e programação, eu consegui otimizar processos e economizar um tempo precioso para a empresa. Isso significou um aumento salarial também! 💵✨",
  "Caramba, isso é realmente inspirador! Eu sempre pensei que programação e IA eram o futuro, mas você me mostrou que é o presente também! 🌟",
  "Exatamente! E você pode começar a aprender hoje mesmo. Não é apenas uma habilidade para o futuro, é uma oportunidade que pode transformar sua vida agora! 🌟🚀",
  "Você tem razão! Parece que é hora de começar a investir no aprendizado de programação e IA. Quem sabe onde isso pode me levar? 👀",
  "Com certeza! E lembre-se, o futuro é brilhante para quem se dedica e aprende essas habilidades poderosas. Não perca tempo e comece agora! 🌟",
  "Vou seguir seu conselho! Obrigado pela motivação e parabéns pela promoção! 🥳",
  "Muito obrigado! E boa sorte na sua jornada de aprendizado. Estou torcendo por você! 😉",
  "Valeu! Vamos em frente e fazer a diferença com programação e inteligência artificial! 🚀✨",
  "Isso aí! O futuro é nosso para criar. Vamos juntos nessa jornada incrível! 🌟",
  "Com certeza! Aproveite cada momento e continue brilhando! 😊"
];

function createMessage(message, sender, time) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add(sender ? 'senderContainer' : 'receiverContainer', 'arrowm');

  const messageElement = document.createElement('div');
  messageElement.classList.add(sender ? 'sender' : 'reciver', 'mepop');

  const messageContent = document.createElement('div');
  messageContent.classList.add('thereply');
  messageContent.innerHTML = `<p>${message}</p><div class="time"><p>${time}</p></div>`;

  messageElement.appendChild(messageContent);
  messageContainer.appendChild(messageElement);
  conveMessages.appendChild(messageContainer);

  // Adiciona um atraso antes de tocar o som
  setTimeout(() => {
    const audio = new Audio(sender ? 'som-whatsap.mp3' : 'som-whatsap1.mp3');
    audio.play();
  }, 500); // 500ms de atraso

  // Faz o scroll automático para a última mensagem
  conveMessages.scrollTop = conveMessages.scrollHeight;
}

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

  // Índice da mensagem a ser exibida
  let index = 0;

  // Função para adicionar uma nova mensagem
  function addMessage() {
    if (index < predefinedMessages.length) {
      const message = predefinedMessages[index];
      const sender = index % 2 === 0; // Alterna entre remetente e destinatário

      // Adiciona um novo timestamp para cada mensagem
      timestamp += Math.floor(Math.random() * 60000) + 3000; // 30 a 90 segundos entre as mensagens

      // Formata o timestamp para a hora
      const time = new Date(timestamp).toLocaleTimeString();

      createMessage(message, sender, time);
      index++; // Avança para a próxima mensagem
    }
  }

  // Função recursiva para adicionar mensagens com atraso
  function addMessagesWithDelay() {
    addMessage();
    if (index < predefinedMessages.length) {
      setTimeout(addMessagesWithDelay, 8000); // 8 segundos de atraso entre mensagens
    }
  }

  // Inicia a adição de mensagens
  addMessagesWithDelay();
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
