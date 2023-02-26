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


function onGalleryContainerClick(event) {
  event.preventDefault();

  const isGalleryImageEl = event.target.classList.contains('gallery__image');

  if (!isGalleryImageEl) {
    return;
  }

  const instance = basicLightbox.create(`<img width="1024" height="720" src="${event.target.dataset.source}" alt="${event.target.alt}">`, {
		onShow: (instance) => {},
		onClose: (instance) => {}
	})

instance.show((instance) => {} )

setTimeout(() => {
  instance.close((instance) => {} )
}, 5000);
  
  // instance.element().querySelector('img').src = event.target.dataset.source;
  // instance.show(); 
}






// function onEscPress(event) {
//  if(event.code === "Escape") {
//   instance.close();
//  }
// }

// const instance = basicLightbox.create(`<img width="1024" height="720" src="">`,
//   {
//   onShow: (instance) => { window.addEventListener('keydown', onEscPress) },
//   onClose: (instance) => { window.removeEventListener('keydown', onEscPress) }
// });




// const gallery = document.querySelector('.gallery');

// function createGalleryItem(item) {
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

//   return galleryItem;
// }

// function openModal(event) {
//     event.preventDefault();

//     if (event.target.nodeName !== 'IMG') return;

//     const largeImageSrc = event.target.dataset.source;
//     const largeImageAlt = event.target.alt;

//     const modal = basicLight
// }

// gallery.innerHTML = createGalleryMarkup(galleryItems);

// gallery.addEventListener('click', (event) => {
//     event.preventDefault();

//     const target = event.target;
//     if (target.tagName !== 'IMG') return;

//     const instance = basicLightbox.create(`
//     <img src="${target.dataset.source}" alt="${target.alt}">
//   `);
// })
