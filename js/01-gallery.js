import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick)


function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) => `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
      `
    )
    .join('');
};

let instance = 0;
function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains('gallery__image');

  if (!isGalleryImageEl) {
    return;
  }

  instance = basicLightbox.create(`<img width="1024" height="720" src="${event.target.dataset.source}" alt="${event.target.alt}">`,
    // {
    //   closable: true,
    //   onShow: (instance) => { window.addEventListener('keydown', onEscKeyPress)},
    //   onClose: (instance) => { window.removeEventListener('keydown', onEscKeyPress) },
    // }
  );

  instance.show((instance) => { window.addEventListener('keydown', onEscKeyPress)});

setTimeout(() => {
  instance.close((instance) => {} )
}, 10000);
  
  // instance.element().querySelector('img').src = event.target.dataset.source;
  // instance.show(); 
};

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    instance.close( (instance) => { window.removeEventListener('keydown', onEscKeyPress) });
  }
};












// const galleryContainer = document.querySelector('.gallery');
// // const galleryMarkup = createGalleryMurkup(galleryItems);

// galleryContainer.addEventListener("click", onGalleryContainerClick);


// const imageElements = [];

// // createGalleryMurkup();
// galleryItems.forEach(item => {
//   const galleryItem = document.createElement('div');
//   galleryItem.classList.add('gallery__item');

//   const galleryLink = document.createElement('a');
//   galleryLink.classList.add('gallery__link');
//   galleryLink.href = item.original;

//   const galleryImage = document.createElement('img');
//   galleryImage.classList.add('gallery__image');
//   galleryImage.src = item.preview;
//   galleryImage.dataset.source = item.original;
//   galleryImage.alt = item.description;

//   galleryLink.appendChild(galleryImage);
//   galleryItem.appendChild(galleryLink);

//   // galleryContainer.append(galleryItem);
//   imageElements.push(galleryItem);
// });

// galleryContainer.append(...imageElements);

// const instance = basicLightbox.create(`<img width="1024" height="720" src="">`, {
//   onShow: (instance) => { window.addEventListener('keydown', onEscKeyPress) },
//   onClose: (instance) => { window.removeEventListener('keydown', onEscKeyPress) }
// });

// // instance.show((instance) => {} )

// setTimeout(() => {
//   instance.close((instance) => {} )
// }, 10000);


// function onGalleryContainerClick(event) {
//   event.preventDefault();

//   // const isGalleryImageEl = event.target.classList.contains('gallery__image');

//   // if (!isGalleryImageEl) {
//   //   return;
//   // }

//   const target = event.target;
//   if (target.tagName !== 'IMG')

//   // if (event.target.nodeName !== 'IMG')
//   {
//     return;
//   }
  
//   instance.element().querySelector('img').src = event.target.dataset.source;
//   instance.show(); 
// };


// function onEscKeyPress(event) {
//   const ESC_KEY_CODE = 'Escape';
//   const isEscKey = event.code === ESC_KEY_CODE;

//   if (isEscKey) {
//     instance.close();
//   }
// };




