const contactForm = document.querySelector('#contact-form');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const phone = formData.get('phone');
  const message = formData.get('message');
  const text = [
    'Заявка с сайта Steel Contour',
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Задача: ${message}`,
  ].join('\n');

  window.location.href = `https://wa.me/375295210210?text=${encodeURIComponent(text)}`;
});
