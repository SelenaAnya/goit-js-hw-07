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
  }
];

// Знаходимо список ul.gallery
const gallery = document.querySelector('.gallery');

// Генеруємо галерею та додаємо до списку
images.forEach(({ url, alt }) => {
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.src = url;
  img.alt = alt;

  // Додаємо стилі до <img> через JS
  img.style.width = '360px';
  img.style.height = '300px';
  img.style.margin = '0 auto';
  img.style.display = 'block';


  li.appendChild(img);

  // Додаємо стилі до <li>
  li.style.listStyle = 'none';
  li.style.display = 'flex';
  li.style.justifyContent = 'center';
  li.style.alignItems = 'center';
  li.style.marginBottom = '24px';

  gallery.appendChild(li);
});

// Стилізуємо ul.gallery
gallery.style.display = 'flex';
gallery.style.flexWrap = 'wrap';
gallery.style.gap = '24px';
gallery.style.justifyContent = 'center';
gallery.style.margin = '0';
gallery.style.padding = '0';
gallery.style.listStyle = 'none';
gallery.style.marginTop = '100px';
gallery.style.marginBottom = '100px';

