import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const imageMarkup = createGalleryCardMarkup(galleryItems)
galleryContainer.insertAdjacentHTML('beforeend', imageMarkup)
function createGalleryCardMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
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
    `}).join('');
 
  
}

galleryContainer.addEventListener('click', onGalleryImageClick)

function onGalleryImageClick(evt) {
  evt.preventDefault();

  const isGalleryElement = evt.target.classList.contains('gallery__image')

  if (!isGalleryElement) {
    return;
  }

   const selectedElement = evt.target.dataset.source;
  openModal(selectedElement);
}

function openModal(selectedElement) {
 const modalForm = basicLightbox.create(`
    <img src="${selectedElement}" class = "modal">
`);
  modalForm.show();
 document.addEventListener('keydown', evt => {
    evt.preventDefault();

    if (evt.code === 'Escape') {
      modalForm.close();
    }
  });
  
}

