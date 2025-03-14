document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
      form.reset();
    });
  });
  