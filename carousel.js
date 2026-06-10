document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const mainImage = carousel.querySelector('[data-carousel-main]');
  const counter = carousel.querySelector('[data-carousel-counter]');
  const thumbnails = Array.from(carousel.querySelectorAll('[data-carousel-thumb]'));
  let currentIndex = 0;

  const showImage = (index) => {
    currentIndex = (index + thumbnails.length) % thumbnails.length;
    const activeThumbnail = thumbnails[currentIndex];

    mainImage.src = activeThumbnail.dataset.src;
    mainImage.alt = activeThumbnail.dataset.alt;
    counter.textContent = `${currentIndex + 1} / ${thumbnails.length}`;

    thumbnails.forEach((thumbnail, thumbnailIndex) => {
      const isActive = thumbnailIndex === currentIndex;
      thumbnail.classList.toggle('active', isActive);
      thumbnail.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };

  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => {
    showImage(currentIndex - 1);
  });

  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => {
    showImage(currentIndex + 1);
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => showImage(index));
  });

  showImage(0);
});
