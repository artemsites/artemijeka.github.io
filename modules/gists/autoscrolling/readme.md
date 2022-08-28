### Плавная прокрутка до элемента на другой или на текущей странице | Smooth scrolling to an element on another or current page.
### Autoscrolling.js

### Применение | Usage:
#### Ссылка на страницу и якорь целевого элемента | Link to the page and anchor of the target element:
```
<a href="/#takePart" class="header__nav-item">участие в проекте</a>
```

#### Целевой элемент с ID | Target element with ID:
```
<section id="takePart"></section>
```

#### js:
```
new Autoscrolling({
  selectorFrom: '.header__menu-link',
  speedScroll: 750,
  //selectorTarget: '.app__box-two',
  selectorTopFixed: '.header__container',
  //addMarginTopPx: 0,
  functionBeforeScroll: () => { window.customIsAutoscrolling = true; },
  functionCallBack: () => { window.customIsAutoscrolling = false; },
});
```
#
[#autoscrolling](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
[#auto_scrolling](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
[#auto_scrolling_to_id_block](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
[#auto_scrolling_to_id](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
[#auto_scroll_to_id](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
[#auto_scroll_to_block_id](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
[#auto_scroll_to_block](https://snippets.cacher.io/snippet/6cf4733376ca1d55c7fe)
