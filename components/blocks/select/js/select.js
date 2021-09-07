(function () {
  document.addEventListener('DOMContentLoaded', function () {



    let selectBtnList = document.querySelectorAll('.select__btn');

    for (let selectBtnItem of selectBtnList) {
      selectBtnItem.addEventListener('click', function (e) {
        // console.log(e.target.closest('.lk-app-questions__item-select'));
        e.target.closest('.select').classList.toggle('--open');
        console.log(document.querySelectorAll('.select__label'));
      });
    }

    //esc enter и click закрывает select
    document.addEventListener('keyup', function (e) {
      if (e.key === 'Enter' || e.key === 'Escape') {
        document.querySelector('.select.--open').classList.remove('--open');
      }
    });



  });
})();