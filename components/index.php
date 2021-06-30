<!DOCTYPE html>
<html lang="ru">

<head>
  <meta charset="utf-8">
  <title>Frontend components</title>
  <meta name="author"
    content="Design: ; Front-end: Артём Кузнецов, web.master-artem.ru; Back-end/CMS: ; SEO: ; Marketing: ;">
  <meta name="description" content="">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <!-- for tab android 5+ -->
  <meta name="theme-color" content="#fff">

  <meta property="og:title" content="">
  <meta property="og:site_name" content="">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:description" content="">
  <meta property="og:type" content="website">
  <meta property="og:url" content="">
  <meta property="og:image" content="">
  <meta property="vk:image" content="">


</head>

<body>  
  
  <nav class="nav">
    <a href="../index.html" class="nav__link">effects</a>
    <a href="../modules/index.html" class="nav__link">modules</a>
    <a href="./index.php" class="nav__link --active">components</a>
  </nav>



  <header>


    <div data-link-to-github="https://github.com/artemijeka/btn-menu" class="js-link-to-github">
      <link rel="stylesheet" href="./blocks/btn-menu/css/btn-menu.min.css">
      <?php include_once( './blocks/btn-menu/btn-menu.php' ); ?>
      <script src="./blocks/btn-menu/js/btn-menu.min.js"></script>
    </div>



  </header>



  <main></main>



  <footer></footer>



  <style>
    .context-menu {
      box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.15);
      background-color: rgba(255, 255, 255, 0.9);
      padding: 1em;

      position: absolute;
    }
  </style>
  <script>

    document.addEventListener('click', function (e) {
      let contextMenuDelete = document.querySelector('.context-menu');
      contextMenuDelete.remove();
    });

    document.addEventListener('contextmenu', function (e) {

      e.preventDefault();

      let contextMenuExisting = document.querySelector('.context-menu');
      if (contextMenuExisting) {
        contextMenuExisting.remove();
      }

      let contextMenu = document.createElement('div');
      contextMenu.classList.add('context-menu');

      let closest = e.target.closest('.js-link-to-github');
      let linkToGitHub = closest.getAttribute('data-link-to-github');
      contextMenu.innerHTML = '<a href="' + linkToGitHub + '" target="_blank">' + linkToGitHub + '</a>';
      contextMenu.style.left = e.offsetX + 25 + 'px';
      contextMenu.style.top = e.offsetY + 25 + 'px';
      document.body.append(contextMenu);
    });

  </script>

</body>

</html>