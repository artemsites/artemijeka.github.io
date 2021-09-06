// (function () {
//   document.addEventListener('DOMContentLoaded', function () {



    document.addEventListener('click', function (e) {
      let contextMenuDelete = document.querySelector('.js-context-menu');
      contextMenuDelete.remove();
    });

    document.addEventListener('contextmenu', function (e) {

      e.preventDefault();
      console.log(e);

      let contextMenuExisting = document.querySelector('.js-context-menu');
      if (contextMenuExisting) {
        contextMenuExisting.remove();
      }

      let contextMenu = document.createElement('div');
      contextMenu.classList.add('js-context-menu');

      let closest = e.target.closest('.js-link-to-github');
      let linkToGitHub = closest.getAttribute('data-link-to-github');
      contextMenu.innerHTML = '<a href="' + linkToGitHub + '" target="_blank">' + linkToGitHub + '</a>';
      contextMenu.style.left = e.clientX + 'px';
      contextMenu.style.top = e.clientY + 'px';
      document.body.append(contextMenu);
    });



//   });
// })();