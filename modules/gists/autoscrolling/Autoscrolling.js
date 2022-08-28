/**
 * Title: Smooth scrolling to an element on another or current page | Плавная прокрутка до элемента на другой или на текущей странице
 * Author:  Artem Kuznecov
 * Contacts web.master-artem.ru
 * 
 * @version 1.7 - 23.03.2022
 * @cacher https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe
 * @gist https://gist.github.com/artemijeka/3c4510d49cabf5448038714ecdffee19
 * 
 * @dependancies scrollSmoothlyToPosition() - https://snippets.cacher.io/snippet/1530dfc32408f9682b30 - https://gist.github.com/artemijeka/860cfcd079b1f42cace732c31b5e3a29 
 * 
 * @param {String}   obj.selectorFrom         | a link or any element if you specified the target element selectorTarget | ссылка или любой элемент если указали целевой элемент selectorTarget
 * @param {Number}   obj.speedScroll          | optionally - default: 1000
 * @param {String}   obj.selectorTarget       | optionally - if specified, it will scroll to this element by clicking on the select From element | если указано то пролистнётся к этому элементу по щелчку на элемент selectorFrom
 * @param {String}   obj.selectorTopFixed     | optionally - default: 0, a fixed element at the top, such as a header | фиксированный элемент сверху, напрмер шапка 
 * @param {Number}   obj.addMarginTopPx       | optionally - default: 0
 * @param {Function} obj.functionCallBack     | optionally - example: for close menu | например: для закрытия меню
 * @param {Function} obj.functionBeforeScroll | optionally
 **/
function Autoscrolling(obj) {
  this.links = document.querySelectorAll(obj.selectorFrom);
  this.addMarginTopPx = obj.addMarginTopPx || 0;
  this.speedScroll = obj.speedScroll || 1000;
  var _self = this;

  /* Плавный скролл до элемента с id на текущей странице. */
  for (var link of _self.links) {
    link.addEventListener('click', function (event) {
      //здесь считается отступ от верха потому что высота верхней панели может меняться
      this.topFixedEl = document.querySelector(obj.selectorTopFixed);
      _self.topFixedElementHeight = ((this.topFixedEl) ? this.topFixedEl.clientHeight : 0);
      _self.sumMarginTop = _self.topFixedElementHeight + _self.addMarginTopPx;
      if (obj.selectorTarget) {
        var targetForScroll = document.querySelector(obj.selectorTarget);
      } else {
        var targetForScroll = document.querySelector(event.target.hash);
      }
      if (targetForScroll) {
        event.preventDefault();
        autoscrolling(targetForScroll.getBoundingClientRect().top, _self.speedScroll, _self.sumMarginTop);
      }
    });
  }

  /* Плавный скролл до элемента с id на другой странице. */
  if (window.location.hash) {
    var targetForScroll = document.querySelector(window.location.hash);
    window.location.hash = '';//очищаем хеш в адресной строке чтобы предотвратить стандартный скролл браузера
    if (targetForScroll) {
      autoscrolling(targetForScroll.getBoundingClientRect().top, _self.speedScroll, _self.sumMarginTop);
    }
  }

  function autoscrolling(pos, speed, marginTop) {
    if (obj.functionBeforeScroll) {
      obj.functionBeforeScroll();
    }
    
    scrollSmoothlyToPosition(pos, speed, marginTop);

    if (obj.functionCallBack) {
      setTimeout(function () {
        obj.functionCallBack();
      }, _self.speedScroll);
    }
  }

}