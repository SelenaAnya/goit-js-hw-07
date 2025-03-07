// Отримуємо елементи інпуту та спану
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухач події input до елемента input
nameInput.addEventListener('input', (event) => {
  // Очищаємо значення від пробілів на краях
  const trimmedValue = event.target.value.trim();

  // Підставляємо ім'я або "Anonymous", якщо інпут порожній
  nameOutput.textContent = trimmedValue || 'Anonymous';
});

// Додаємо стилізацію елементів через JavaScript
// Стилізація інпуту
nameInput.style.paddingLeft = '16px';
nameInput.style.paddingTop = '8px';
nameInput.style.paddingBottom = '8px';
nameInput.style.border = '1px solid #808080';
nameInput.style.borderRadius = '4px';
nameInput.style.fontSize = '16px';
nameInput.style.marginBottom = '10px';
nameInput.style.display = 'block';
nameInput.style.width = '300px';

// Стилізація заголовка
const heading = nameOutput.closest('h1'); // Беремо найближчий h1
heading.style.fontFamily = 'Montserrat, sans-serif';
heading.style.fontSize = '24px';
heading.style.color = '#2E2F42';
heading.style.textAlign = 'left';

