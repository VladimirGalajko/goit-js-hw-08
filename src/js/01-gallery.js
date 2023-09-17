// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

const galleryUl = document.querySelector('.gallery');

galleryUl.insertAdjacentHTML('beforeend', createListLi(galleryItems));

function createListLi(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"        
          alt="${description}"                   
        />
      </a>
    </li>
    `
    )
    .join('');
}

new SimpleLightbox('.gallery__link', {
  captions: 'true',
  captionsData: 'alt',
  captionDelay: 300,
});
