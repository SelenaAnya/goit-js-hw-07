const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// Знаходимо список ul.gallery
const gallery = document.querySelector('.gallery');

// HTML-рядок для всіх елементів
const markup = images
  .map(
    ({ url, alt }) =>
      `<li style="
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 24px;">
          <img src="${url}" alt="${alt}" style="
            width: 360px;
            height: 300px;
            margin: 0 auto;
            display: block;">
      </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// Стилізуємо ul.gallery
Object.assign(gallery.style, {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '24px',
  justifyContent: 'center',
  margin: '0',
  padding: '0',
  listStyle: 'none',
  marginTop: '100px',
  marginBottom: '100px',
  width: '1128px',
});

// Стилізуємо li
const itemsInGallery = gallery.querySelectorAll('li');
itemsInGallery.forEach(item => {
  item.style.listStyle = 'none';
  item.style.display = 'flex';
  item.style.justifyContent = 'center';
  item.style.alignItems = 'center';
  item.style.marginBottom = '24px';
});
