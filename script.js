		document.addEventListener('DOMContentLoaded', function () {
            const translations = {
                en: { es: 'Hola', fr: 'Bonjour', de: 'Hallo', banana: 'banana' /* Add more words as needed */ },
                es: { en: 'Hello', fr: 'Bonjour', de: 'Hallo', banana: 'plátano' /* Add more words as needed */ },
                fr: { en: 'Hello', es: 'Hola', de: 'Hallo', banana: 'banane' /* Add more words as needed */ },
                de: { en: 'Hello', es: 'Hola', fr: 'Bonjour', banana: 'Banane' /* Add more words as needed */ }
                // Add more languages and words as needed
            };

            const translateBtn = document.getElementById('translateBtn');
            const translationResult = document.getElementById('translationResult');

            translateBtn.addEventListener('click', function () {
                const word = wordInput.value.trim().toLowerCase();
                const fromLanguage = 'en'; // Assuming the input is always in English
                const toLanguage = languageSelect.value;

                if (!word) {
                    alert('Please enter a word or phrase.');
                    return;
                }

                const translatedText = translate(word, fromLanguage, toLanguage);
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

