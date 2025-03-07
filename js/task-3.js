// Отримуємо елементи інпуту та спану
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

// Додаємо слухач події input до елемента input
nameInput.addEventListener('input', (event) => {
  // Очищаємо значення від пробілів на початку і кінці
  const trimmedValue = event.target.value.trim();

  // Якщо значення порожнє або містить лише пробіли, підставляємо "Anonymous"
  nameOutput.textContent = trimmedValue || 'Anonymous';
});
