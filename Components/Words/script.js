let wordInput;
let errorInfo;
let addBtn;
let vowelList;
let consonantList;
let newWord;
let popup;
let popupInfo;
let wordToEdit;
let popupInput;
let popupAddBtn;
let popupCloseBtn;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    wordInput = document.querySelector('.word-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    vowelList = document.querySelector('table tbody');
    consonantList = document.querySelector('table tbody');

    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewWord);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeWordText);
    wordInput.addEventListener('keyup', enterKeyCheck);
}

const addNewWord = () => {
    if (wordInput.value !== '') {
        const newRow = document.createElement('tr');
        const firstChar = wordInput.value.charAt(0);
        newRow.innerHTML = `
            <td>${wordInput.value}</td>
            <td></td>
        `;
        if (isVowel(firstChar)) {
            newRow.children[0].classList.add('vowel-word');
        } else {
            newRow.children[0].classList.add('consonant-word');
        }
        if (isVowel(firstChar)) {
            vowelList.appendChild(newRow);
        } else {
            consonantList.appendChild(newRow);
        }
        wordInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = 'Enter a word!';
    }
}

const isVowel = (char) => {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = '';
}

const changeWordText = () => {
    if (popupInput.value !== '') {
        wordToEdit.textContent = popupInput.value;
        popup.style.display = 'none';
        popupInfo.textContent = '';
    } else {
        popupInfo.textContent = 'Enter a word!';
    }
}

const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        addNewWord();
    }
}

document.addEventListener('DOMContentLoaded', main);
