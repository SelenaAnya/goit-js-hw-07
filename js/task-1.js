// Вибираємо всі елементи з класом "item"
const items = document.querySelectorAll('.item');

// Додаємо стилі до кожного елемента
items.forEach(item => {
  // Стилі для контейнера кожного пункту
  item.style.border = 'none';
  item.style.borderRadius = '4px';
  item.style.padding = '16px';
  item.style.marginBottom = '24px';
  item.style.width = '293px';
  item.style.backgroundColor = '#F6F6FE';
  item.style.listStyle = 'none';

  // Стилі для заголовків
  const title = item.querySelector('h2');
  title.style.fontSize = '24px';
  title.style.textAlign = 'left';
  title.style.color = 'rgba(46, 47, 66, 1)';
  title.style.margin = '0';
  title.style.fontStyle = 'Montserrat';
  title.style.fontWeight = '600';
  title.style.letterSpacing = '4%';


  // Стилі для списків
  const list = item.querySelector('ul');
  list.style.padding = '0';
  
  // Стилі для пунктів списків
  const listItems = list.querySelectorAll('li');
  listItems.forEach(li => {
    li.style.margin = '5px 0';
    li.style.textAlign = 'left';
    li.style.color = '#555';
    li.style.borderRadius = '4px';
    li.style.border = '1px solid rgba(128, 128, 128, 1)';
    li.style.listStyle = 'none';
    li.style.paddingLeft = '16px';
    li.style.fontSize = '16px';
    li.style.letterSpacing = '0.03em';
    li.style.lineHeight = '1.5';
    li.style.alignItems = 'center';
    li.style.marginBottom = '8px';
    li.style.paddingBottom = '8px';
    li.style.paddingTop = '8px';
  });
});



const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const title = category.querySelector('h2').textContent;
  const itemCount = category.querySelectorAll('ul li').length;
  
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
