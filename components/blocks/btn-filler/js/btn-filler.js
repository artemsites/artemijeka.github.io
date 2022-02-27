(function () {
  document.addEventListener('DOMContentLoaded', function () {
    


    // if (!maxWidth(670)) {
      let btnfillerAll = document.querySelectorAll('.btn-filler:not(.--active)');
  
      btnfillerAll.forEach((btnfiller) => {
  
        btnfiller.addEventListener('mouseenter', (e) => {
          let filler = document.createElement('span');
          // let filler = (btnfiller.querySelector('.filler'))?btnfiller.querySelector('.filler'):document.createElement('span');
          filler.classList.add('filler');
          btnfiller.append(filler);
          filler.style.left = `${e.offsetX}px`;
          filler.style.top = `${e.offsetY}px`;
          setTimeout(function () {
            filler.classList.add('--filling');
          }, 50);
        });
  
        btnfiller.addEventListener('mouseleave', (e) => {
          let filler = btnfiller.querySelector('.filler');
          filler.style.left = `${e.offsetX}px`;
          filler.style.top = `${e.offsetY}px`;
          filler.classList.remove('--filling');
          setTimeout(function () {
            btnfiller.querySelector('.filler').remove();
          }, 1000);
        });
  
      });
    // }



  });
})();