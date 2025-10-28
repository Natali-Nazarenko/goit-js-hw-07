const inputElement = document.getElementById('name-input');
const outputElement = document.getElementById('name-output');

inputElement.addEventListener('input', () => {
    outputElement.textContent = inputElement.value.trim() || 'Anonymous';
});
