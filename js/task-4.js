const loginForm = document.querySelector('.login-form');

// Додаємо подію submit
loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const { email, password } = loginForm.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // Перевірка на заповнення полів
  if (!emailValue || !passwordValue) {
    alert('All form fields must be filled in');
    return;
  }

  // об'єкт з даними
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});

// Стилізація форми 
loginForm.style.padding = '24px';
loginForm.style.width = '300px';
loginForm.style.margin = '50px auto';
loginForm.style.padding = '20px';
loginForm.style.border = 'none';
loginForm.style.fontFamily = 'Arial, sans-serif';

// Стилізація елементів форми
const labels = loginForm.querySelectorAll('label');
labels.forEach((label) => {
  label.style.display = 'block';
  label.style.marginBottom = '8px';
  label.style.fontWeight = '400';
});

const inputs = loginForm.querySelectorAll('input');
inputs.forEach((input) => {
  input.style.width = '100%';
  input.style.padding = '10px';
  input.style.border = '1px solid #808080';
  input.style.borderRadius = '4px';
  input.style.boxSizing = 'border-box';
});

const button = loginForm.querySelector('button');
button.style.width = '86px';
button.style.paddingRight = '16px';
button.style.paddingLeft = '16px';
button.style.paddingTop = '8px';
button.style.paddingBottom = '8px';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.backgroundColor = '#007BFF';
button.style.color = '#fff';
button.style.fontSize = '16px';
button.style.cursor = 'pointer';
button.style.transition = 'background-color 0.3s';

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = '#0056b3';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = '#007BFF';
});

