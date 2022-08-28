// import { gsap } from 'gsap';



console.log('startscript');
window.addEventListener('load', function() {
  

  
  console.log('loaded');

  

  var body = document.querySelector('body');

  body.addEventListener('mousemove', function(e) {
    mouseCoords(e);
  });

  var cursor   = document.getElementById('cursor'),
      follower = document.getElementById('follower'),
      links    = document.getElementsByTagName('a'),
      mouseX   = 0,
      mouseY   = 0,
      posX     = 0,
      posY     = 0;

  function mouseCoords(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  }



  gsap.to({}, .01, {

    repeat: -1,

    onRepeat: () => {

      posX += (mouseX - posX) / 5;
      posY += (mouseY - posY) / 5;

      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        }
      });
    
      gsap.set(follower, {
        css: {
          left: posX - 23,
          top: posY - 23,
        }
      });

    }

  });

  



});