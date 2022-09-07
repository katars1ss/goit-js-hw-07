import { galleryItems } from './gallery-items.js';
// Change code below this line

// basicLightbox змінна //
let instance;

const refs = {
    gallery : document.querySelector('.gallery'),
    galleryItem : document.querySelector('.gallery_item'),
    galleryLink : document.querySelector('.gallery__link'),
    gallery_image : document.querySelector('.gallery__image'),
};


function createGallery(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
        <a class = "gallery__link" href = "${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `;
    })
    .join('');
}

function openModal(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    instance = basicLightbox.create(`
    <img src="${ event.target.dataset.source }" >`
    )
    instance.show()
    window.addEventListener('keydown', onEscKeyPress);
}
function onEscKeyPress(event) {
    const Esc_Key_Code = 'Escape';

    if (event.code === Esc_Key_Code) {
        instance.close();
        window.removeEventListener('keydown', onEscKeyPress)
    }
}

refs.gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));

refs.gallery.addEventListener('click', openModal);

