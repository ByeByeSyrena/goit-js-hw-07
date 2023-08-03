import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const ulEl = document.querySelector(".gallery");

const liEls = galleryItems
    .map((image) => `<li class = "gallery__item">
    <a
    class = "gallery__link"
    href="${image.original}"
    >
    <img
    class="gallery__image"
    src="${image.preview}"
    data-source="${image.original}"
    alt="${image.description}">
    </a>
    </li>`)
    .join("");

ulEl.insertAdjacentHTML("afterbegin", `${liEls}`);

ulEl.addEventListener("click", onClick);

function onClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const bigImg = event.target.dataset.source;

    const pressEsc = event => { if (event.code === "Escape") { lightBox.close();}}

    const lightBox = basicLightbox.create(`
		<img width="1400" height="900" src="${bigImg}">
	`, {
		onShow: (lightBox) => {window.addEventListener('keydown', pressEsc)},
		onClose: (lightBox) => {window.removeEventListener('keydown', pressEsc)}
	})
        
    lightBox.show();
    };
