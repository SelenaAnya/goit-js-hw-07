const categories = document.querySelectorAll('#categories .item');

const categoriesList = document.querySelector('#categories');
categoriesList.style.fontFamily = 'Arial, sans-serif';
categoriesList.style.margin = '20px auto';
categoriesList.style.maxWidth = '600px';
categoriesList.style.padding = '0';
categoriesList.style.listStyleType = 'none';


categories.forEach(category => {
 
  category.style.marginBottom = '20px';
  category.style.backgroundColor = '#f5f5f5';
  category.style.border = '1px solid #ddd';
  category.style.borderRadius = '8px';
  category.style.padding = '15px';
  category.style.transition = 'box-shadow 0.3s ease';

    category.addEventListener('mouseover', () => {
    category.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
  });

  category.addEventListener('mouseout', () => {
    category.style.boxShadow = 'none';
  });

  const title = category.querySelector('h2');
  title.style.fontSize = '24px';
  title.style.color = '#333';
  title.style.marginBottom = '10px';

  const itemsList = category.querySelector('ul');
  itemsList.style.margin = '0';
  itemsList.style.paddingLeft = '20px';
  itemsList.style.listStyleType = 'circle';

  const items = itemsList.querySelectorAll('li');
  items.forEach(item => {
    item.style.fontSize = '18px';
    item.style.color = '#555';
    item.style.lineHeight = '1.6';
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
