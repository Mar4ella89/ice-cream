(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-about-open]'),
    closeModalBtn: document.querySelector('[data-modal-about-close]'),
    modal: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

$('body').on('click', '.js-trailer', function () {
  $('#trailer-box').dialog({
    modal: false,
    show: 'fade',
    hide: 'fade',
    width: 800,
    close: function (event) {
      $('.modal__video').trigger('pause');
    },
  });
  return false;
});
