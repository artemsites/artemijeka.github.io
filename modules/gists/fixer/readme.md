# Фиксация блоков при прокрутке | Block fixing when scrolling
## fixer.js

### Фиксация блока при прокрутке по верху окна | Fixing a block when scrolling along the top of the window:
```
var headerNav = new Fixer({
  blockSelector: '.header__nav',
  fixAtTop: true,
});
```

### Фиксация блока по низу предыдущего блока, при прокрутке | Fixing a block when scrolling along the bottom of the previous block:
```
var headerMobileMenu = new Fixer({
  blockSelector: '.header__mobile-menu',
  fixUnderBlock: '.header__nav',
});
```

### Фиксация блока по верху нижелещащего блока, при прокрутке | Fixing a block to the top of the underlying block when scrolling:
```
var sidebarMenu = new Fixer({
  blockSelector: '.sidebar-menu',
  fixOverBlock: '.form-bottom',
  blockMarginBottomPx: 40,
});
```
#
[#module_fixer](url)
[#frontend_module_fixer](url)
[#module_fixer_scrollig](url)
[#frontend_module_fixer_scrollig](url)
[#module_fixer_scroll](url)
[#frontend_module_fixer_scroll](url)
[#module_scroll_fixer](url)
[#frontend_module_scroll_fixer](url)
[#module_scrolling_fixer](url)
[#frontend_module_scrolling_fixer](url)