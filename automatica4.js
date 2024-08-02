document.getElementById('start').addEventListener('click', () => {
  simulateConversation();
});

const conveMessages = document.querySelector('.convemessages');
const inputMessage = document.querySelector('input[type="text"]');

// Mensagens fixas e sequência
const predefinedMessages = [
  "Olá, tudo bem? 😄",
  "Estou ótimo! E você? Como anda a sua jornada no mundo da tecnologia? 🌟",
  "Ah, estou empolgado! Acabei de começar a aprender sobre inteligência artificial! 🤖",
  "Sério? Que incrível! IA é uma área fascinante. O que você está achando até agora? 😃",
  "Estou achando maravilhoso! É como se estivéssemos desbloqueando os segredos do futuro! 🚀",
  "Com certeza! IA é uma das áreas mais revolucionárias da tecnologia. Está mudando o mundo de formas incríveis! 🌍",
  "Exatamente! E o melhor é que temos a chance de fazer parte dessa transformação. 🛠️",
  "Você já parou para pensar como a IA pode impactar diferentes setores? É como mágica! ✨",
  "Totalmente! Desde saúde até transporte, passando por entretenimento e educação, a IA está em todos os lugares. 🚗🏥🎬📚",
  "E o mais emocionante é que, com a IA, podemos resolver problemas complexos e melhorar a vida das pessoas de formas que nunca imaginamos. 🌟",
  "Com certeza! Imagine, por exemplo, usar IA para ajudar na pesquisa de doenças ou criar soluções sustentáveis para o meio ambiente. 🌱",
  "É verdade! E além de tudo isso, é uma área com tantas oportunidades! Quem não gostaria de estar na vanguarda da inovação? 💡",
  "Sem dúvida! E o mais legal é que estamos apenas começando. O potencial da IA é praticamente ilimitado. 🚀",
  "Você já se imaginou criando um projeto de IA que muda o mundo? Como um assistente virtual que entende cada necessidade, ou um sistema que pode prever desastres naturais? 🌪️",
  "Uau, isso seria incrível! A possibilidade de criar algo que realmente faz a diferença é tão emocionante! 😍",
  "E sabe o que é ainda mais legal? A IA está se tornando cada vez mais acessível. Com recursos como o TensorFlow e PyTorch, qualquer pessoa pode começar a aprender e criar! 📚",
  "Exatamente! E com a ajuda de cursos online, tutoriais e comunidades, o aprendizado nunca foi tão fácil e acessível. 🎓",
  "É verdade! A chave é ter curiosidade e persistência. Com essas qualidades, você pode alcançar grandes feitos no mundo da IA. 🚀",
  "E além de tudo, a IA é uma forma de fazer a diferença. Podemos contribuir para um futuro melhor e mais inteligente. 🌟",
  "Com certeza! A IA não é apenas sobre tecnologia, mas sobre transformar ideias em realidade e melhorar a vida das pessoas. 💪",
  "Então, está pronto para mergulhar de cabeça no universo da inteligência artificial? A aventura está apenas começando! 🤩",
  "Estou mais do que pronto! Com entusiasmo e paixão, podemos fazer grandes coisas na IA. Vamos juntos nessa jornada emocionante! 🌟",
  "Ótimo! Vamos explorar, aprender e criar o futuro com inteligência artificial. O mundo está esperando por nossas ideias brilhantes! 💡",
  "Isso mesmo! A IA é a chave para o futuro, e nós somos os criadores dessa nova era. Vamos fazer história! 🚀",
  "Sim! E nunca se esqueça: a jornada é tão importante quanto o destino. Aproveite cada momento do aprendizado! 😊",
  "Com certeza! Vamos em frente, explorando e descobrindo o incrível mundo da IA. O futuro é brilhante! 🌟"
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
      timestamp += Math.floor(Math.random() * 60000) + 30000; // 30 a 90 segundos entre as mensagens

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
