/**
 * @version 3.3 - 9.07.2022
 * @author  Artem Kuznecov
 * @email   artem.kuznecov.samara@yandex.ru
 * @website https://web.master-artem.ru
 * @source  https://snippets.cacher.io/snippet/79e169f9ca705c345531
 * @source  https://gist.github.com/artemijeka/130fd58f6859999faafcea60de686262
 * @param   {String}  obj.blockSelector
 * @param   {Boolean} obj.fixAtTop
 * @param   {String}  obj.fixUnderBlock
 * @param   {String}  obj.fixOverBlock
 * @param   {Number}  obj.blockMarginBottomPx
 */
function Fixer(obj) {
  var self = this;
  this.block = document.querySelector(obj.blockSelector);
  this.windowOfTop = null;
  this.blockOfTop = null;
  this.blockOffsetTopFixed = null;
  // this.height = null;
  this.fixed = false;
  this.pxOfTop = null;
  this.blockAbove = document.querySelector(obj.fixUnderBlock);
  this.cssTop = window.getComputedStyle(self.block).getPropertyValue('top');
  // console.log('this.cssTop ', this.cssTop);
  this.cssTopNumber = parseFloat(this.cssTop);
  this.marginBottomPx = obj.blockMarginBottomPx || 0;

  this.loopLoadScrollResizeWindow = function () {
    ['load', 'scroll', 'resize'].forEach(function (event) {
      window.addEventListener(event, function () {
        self.windowOfTop = window.scrollY;
        // this.height = self.block.height;
        self.blockOfTop = self.block.offsetTop;

        if (obj.fixAtTop) {
          if (!self.fixed && (self.windowOfTop > self.blockOfTop)) {
            self.blockOffsetTopFixed = self.blockOfTop;
            self.block.style.position = 'fixed';
            self.block.style.top = '0';
            // self.block.classList.add('--fixed');
            self.fixed = true;
          } else if (self.fixed && (self.windowOfTop < self.blockOffsetTopFixed)) {
            self.block.style.position = '';
            self.block.style.top = '';
            // self.block.classList.remove('--fixed');
            self.fixed = false;
          }
        }

        if (obj.fixUnderBlock) {
          if (self.windowOfTop < self.blockAbove.getBoundingClientRect().height) {
            self.block.classList.add('--fixed');
            self.block.style.top = 'calc(' + self.cssTop + ' - ' + self.windowOfTop + 'px)';
          } else {
            // self.block.classList.remove('--fixed');
            self.block.style.top = 'calc(' + self.blockAbove.getBoundingClientRect().height + 'px)';
          }
        }

        if (obj.fixOverBlock) {
          var blockAboveOfViewport = document.querySelector(obj.fixOverBlock).getBoundingClientRect();
          // console.log(document.querySelector(obj.fixOverBlock))
          var blockHeight = self.block.getBoundingClientRect().height;
          // console.log(blockHeight)
          var calcTopOfViewport = (blockAboveOfViewport.top - blockHeight - self.marginBottomPx);
          // console.log(calcTopOfViewport)

          if (blockAboveOfViewport.top < (blockHeight + self.cssTopNumber + self.marginBottomPx)) {
            self.block.style.top = calcTopOfViewport + 'px';
          } else {
            self.block.style.top = self.cssTop;
          }

        }
      });
    });
    
  }();

}