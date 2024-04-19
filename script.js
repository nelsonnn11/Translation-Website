// Language translation functionality

document.getElementById('translateBtn').addEventListener('click', function() {
    const word = document.getElementById('wordInput').value;
    const language = document.getElementById('languageSelect').value;

    translateWord(word, language);
});

function translateWord(word, language) {
    // Your translation logic goes here
    // You can use APIs like Google Translate API or other translation services
    // For simplicity, we'll just display a placeholder text
    const translatedText = `Translation of "${word}" to ${language.toUpperCase()}: Lorem ipsum dolor sit amet`;

    displayTranslation(translatedText);
}

function displayTranslation(translatedText) {
    const translationResult = document.getElementById('translationResult');
    translationResult.innerHTML = `<p>${translatedText}</p>`;
}
