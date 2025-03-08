function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Отримуємо потрібні елементи
const body = document.body;
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Слухач події для кнопки
changeColorButton.addEventListener('click', () => {
  const newColor = getRandomHexColor(); // Генеруємо випадковий колір
  body.style.backgroundColor = newColor; // Змінюємо фон body
  colorSpan.textContent = newColor; // колір у span
});

// Стилізація через JS
const widget = document.querySelector('.widget');

// Стилізуємо контейнер
widget.style.display = 'flex';
widget.style.flexDirection = 'column';
widget.style.alignItems = 'center';
widget.style.justifyContent = 'center';
widget.style.gap = '15px';
widget.style.padding = '88px 100px';
widget.style.width = '300px';
widget.style.margin = '50px auto';
widget.style.border = '2px solid #ccc';
widget.style.borderRadius = '10px';
widget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
widget.style.backgroundColor = '#f9f9f9';
widget.style.fontFamily = 'Arial, sans-serif';

// Стилізуємо текст
const paragraph = widget.querySelector('p');
paragraph.style.marginBottom = '16px';
paragraph.style.fontSize = '16px';
paragraph.style.color = '#2E2F42';
paragraph.style.textAlign = 'center';

// Стилізуємо кнопку
changeColorButton.style.width = '148px';
changeColorButton.style.padding = '8px 16px';
changeColorButton.style.border = 'none';
changeColorButton.style.borderRadius = '8px';
changeColorButton.style.backgroundColor = '#4E75FF'; 
changeColorButton.style.color = '#fff';
changeColorButton.style.fontSize = '16px';
changeColorButton.style.cursor = 'pointer';
changeColorButton.style.transition = 'background-color 0.3s';

changeColorButton.addEventListener('mouseover', () => {
  changeColorButton.style.backgroundColor = '#6C8CFF';
});