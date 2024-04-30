// URL of the MyMemory Translation API
const apiUrl = 'https://api.mymemory.translated.net/get';

// Function to translate text using MyMemory Translation API
async function translateText(text, sourceLang, targetLang) {
    try {
        // Construct the URL with query parameters
        const response = await fetch(`${apiUrl}?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${targetLang}`);
        const data = await response.json();
        
        // Return the translated text
        return data.responseData.translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        return '';
    }
}

// Function to handle the Translate button click
async function handleTranslate() {
    // Get the English and Spanish text boxes
    const englishTextBox = document.getElementById('english-text');
    const spanishTextBox = document.getElementById('spanish-text');
    
    // Determine the current translation direction
    let sourceLang, targetLang, textToTranslate, outputTextBox;

    if (englishTextBox.style.display !== 'none') {
        // If English is visible, translate English to Spanish
        sourceLang = 'en';
        targetLang = 'es';
        textToTranslate = englishTextBox.value;
        outputTextBox = spanishTextBox;
    } else {
        // If Spanish is visible, translate Spanish to English
        sourceLang = 'es';
        targetLang = 'en';
        textToTranslate = spanishTextBox.value;
        outputTextBox = englishTextBox;
    }

    // Perform the translation
    const translatedText = await translateText(textToTranslate, sourceLang, targetLang);
    // Display the translated text in the output text box
    outputTextBox.value = translatedText;
}

// Function to handle the Switch button click
function handleSwitch() {
    // Get the headers and text boxes
    const englishHeader = document.getElementById('english-header');
    const spanishHeader = document.getElementById('spanish-header');
    const englishTextBox = document.getElementById('english-text');
    const spanishTextBox = document.getElementById('spanish-text');
    
    // Swap the header texts
    [englishHeader.textContent, spanishHeader.textContent] = [spanishHeader.textContent, englishHeader.textContent];
    
    // Swap the input box values
    [englishTextBox.value, spanishTextBox.value] = [spanishTextBox.value, englishTextBox.value];
    
    // Optionally, swap the input box display style to hide/show boxes if necessary
}

// Attach event listeners to the buttons
document.getElementById('translate-button').addEventListener('click', handleTranslate);
document.getElementById('switch-button').addEventListener('click', handleSwitch);