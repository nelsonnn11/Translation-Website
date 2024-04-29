document.addEventListener('DOMContentLoaded', function () {
    const translations = {
        en: { 
            es: 'Hola', fr: 'Bonjour', de: 'Hallo', 
            es: 'manzana', fr: 'pomme', de: 'apfel',
            es: 'adonde', fr: 'où', de: 'Wo',
            es: 'mañana', fr: 'matin', de: 'morgen',
            es: 'noche', fr: 'nuit', de: 'nacht',
            es: 'quién', fr: 'qui', de: 'der',
            es: 'cuando', fr: 'quand', de: 'wann',
            es: 'porque', fr: 'pourquoi', de: 'warum',
            es: 'gracias', fr: 'merci', de: 'danke',
            es: 'adios', fr: 'au revoir', de: 'Tschüss'
        },
        es: { 
            en: 'Hello', fr: 'Bonjour', de: 'Hallo', 
            en: 'apple', fr: 'pomme', de: 'apfel',
            en: 'where', fr: 'où', de: 'Wo', 
            en: 'morning', fr: 'matin', de: 'morgen',
            en: 'night', fr: 'nuit', de: 'nacht', 
            en: 'who', fr: 'qui', de: 'der',
            en: 'when', fr: 'quand', de: 'wann', 
            en: 'why', fr: 'pourquoi', de: 'warum',
            en: 'thank you', fr: 'merci', dwhoe: 'danke', 
            en: 'goodbye', fr: 'au revoir', de: 'Tschüss'
        },
        fr: { 
            en: 'Hello', es: 'Hola', de: 'Hallo', 
            en: 'apple', es: 'manzana', de: 'apfel',
            en: 'where', es: 'adonde', de: 'Wo', 
            en: 'morning', es: 'mañana', de: 'morgen',
            en: 'night', es: 'noche', de: 'nacht', 
            en: 'who', es: 'quién', de: 'der',
            en: 'when', es: 'cuando', de: 'wann', 
            en: 'why', es: 'porque', de: 'warum',
            en: 'thank you', es: 'gracias', de: 'danke', 
            en: 'goodbye', es: 'adios', de: 'Tschüss',
        },
        de: { 
            en: 'Hello', es: 'Hola', fr: 'Bonjour', 
            en: 'apple', es: 'manzana', fr: 'pomme',
            en: 'where', es: 'adonde', fr: 'où', 
            en: 'morning', es: 'mañana', fr: 'matin', 
            en: 'night', es: 'noche', fr: 'nuit', 
            en: 'who', es: 'quién', fr: 'qui', 
            en: 'when', es: 'cuando', fr: 'quand', 
            en: 'why', es: 'porque', fr: 'pourquoi', 
            en: 'thank you', es: 'gracias', fr: 'merci', 
            en: 'goodbye', es: 'adios', fr: 'au revoir', 
        }
        // Add more languages and words as needed
    };

    console.log('Translations object:', translations);

    const translateBtn = document.getElementById('translateBtn');
    const wordInput = document.getElementById('wordInput');
    const languageSelect = document.getElementById('languageSelect');
    const translationResult = document.getElementById('translationResult');

    translateBtn.addEventListener('click', function () {
        console.log('Translate button clicked.');

        const word = wordInput.value.trim().toLowerCase();
        console.log('Input word:', word);

        const fromLanguage = 'en'; // Assuming the input is always in English
        const toLanguage = languageSelect.value;
        console.log('From Language:', fromLanguage);
        console.log('To Language:', toLanguage);

        if (!word) {
            alert('Please enter a word or phrase.');
            return;
        }

        const translatedText = translate(word, fromLanguage, toLanguage);
        console.log('Translated Text:', translatedText);
        displayTranslation(translatedText);
    });

    function translate(word, fromLanguage, toLanguage) {
        if (translations[fromLanguage] && translations[fromLanguage][toLanguage]) {
            return translations[fromLanguage][toLanguage];
        } else {
            return 'Translation not available';
        }
    }

    function displayTranslation(translation) {
        translationResult.textContent = translation;
    }
});
