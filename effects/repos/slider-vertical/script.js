(function () {
  document.addEventListener('DOMContentLoaded', function () {



    const btnUp = document.querySelector('.up-button')
    const btnDown = document.querySelector('.down-button')
    const sidebar = document.querySelector('.sidebar')
    const mainSlide = document.querySelector('.main-slide')
    const countSlides = mainSlide.querySelectorAll('.main-slide__item').length
    let indexSlideActive = 0



    sidebar.style.top = `-${(countSlides-1) * 100}vh`



    btnUp.addEventListener('click', () => {
      changeSlide('up', mainSlide, sidebar)
    })



    btnDown.addEventListener('click', () => {
      changeSlide('down', mainSlide, sidebar)
    })



    function changeSlide(where, mainSlide, sidebar) {
      if (where === 'up') {
        indexSlideActive++
        if (indexSlideActive === countSlides) {
          indexSlideActive = 0
        }
      }
      else if (where === 'down') {
        indexSlideActive--
        if (indexSlideActive < 0) {
          indexSlideActive = countSlides - 1
        }
      }

      mainSlide.style.top = `-${indexSlideActive * 100}vh`

      sidebar.style.top = `-${((countSlides-1)-indexSlideActive) * 100}vh`
    }



  })
})()