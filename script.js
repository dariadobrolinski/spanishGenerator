const spanishWords = [
    {
      word: "feliz",
      translation: "happy",
      partOfSpeech: "adjective",
      example: "Estoy muy feliz hoy."
    },
    {
      word: "correr",
      translation: "to run",
      partOfSpeech: "verb",
      example: "Me gusta correr por las mañanas."
    },
    {
      word: "gato",
      translation: "cat",
      partOfSpeech: "noun",
      example: "El gato duerme en el sofá."
    },
    {
      word: "rápido",
      translation: "fast",
      partOfSpeech: "adjective",
      example: "El tren es muy rápido."
    },
    {
      word: "comer",
      translation: "to eat",
      partOfSpeech: "verb",
      example: "Vamos a comer tacos."
    },
    {
      word: "ventana",
      translation: "window",
      partOfSpeech: "noun",
      example: "La ventana está abierta."
    },
    {
      word: "triste",
      translation: "sad",
      partOfSpeech: "adjective",
      example: "Estoy un poco triste hoy."
    },
    {
      word: "leer",
      translation: "to read",
      partOfSpeech: "verb",
      example: "Voy a leer un libro nuevo."
    },
    {
      word: "cielo",
      translation: "sky",
      partOfSpeech: "noun",
      example: "El cielo está azul y despejado."
    },
    {
      word: "fuerte",
      translation: "strong",
      partOfSpeech: "adjective",
      example: "Mi abuela es una mujer muy fuerte."
    }
  ];
  
const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * spanishWords.length);
    return spanishWords[randomIndex];
};

document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const wordDisplay = document.getElementById('wordDisplay');
    const wordTitle = document.getElementById('wordTitle');
    const wordInfo = document.getElementById('wordInfo');
    const exampleSentence = document.getElementById('exampleSentence');
    
    generateBtn.addEventListener('click', () => {
        const randomWord = getRandomWord();
        
        wordTitle.textContent = randomWord.word.toUpperCase();
        
        wordInfo.textContent = `Today's word is "${randomWord.word}" (${randomWord.partOfSpeech}) meaning "${randomWord.translation}".`
        
        exampleSentence.textContent = `Example: ${randomWord.example}`;
        
        wordDisplay.classList.remove('hidden');
    });
});