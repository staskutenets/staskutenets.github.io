
function parallax(event) {
    
    this.querySelectorAll('.layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
        
        layer.style.transform = `translate(${event.clientX*speed/1000}px,${event.clientY*speed/1000}px)` 
        
    });
    
    

    
  
    
    
}
document.addEventListener('mousemove',parallax);



$('#button').click(function () {
    $('.opacity-bg').toggleClass('visible-bg');
    $('.icon-menu').toggleClass('icon-cross');
    $('.opacity-a').toggleClass('visible-a');
    
});

var $container = $('.portfolio-grid');
     // Инициализация Масонри, после загрузки изображений
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : 'li'
         });
       });

// typed cursor
document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Проект", "Стиль","Проект "];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector(".typed").innerHTML = text.substring(0, i+1) +'<span class="typedcursor" aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 20000);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});
// preloader
 document.body.onload = function () {
        setTimeout(function () {
          let preloader = document.getElementById('page-preloader');
          if(!preloader.classList.contains('done'))
          {
            preloader.classList.add('done');
            $("body").removeClass("body-preloader");
          }
          
        }, 1000)
        
      }
      

        if($("#hero").length) {
          var fadeStart=100,fadeUntil=800,fading = $('#hero');
      
          $(window).bind('scroll', function(){
              var offset = $(document).scrollTop()
                  ,opacity=0
              ;
              if( offset<=fadeStart ){
                  opacity=1;
              }else if( offset<=fadeUntil ){
                  opacity=1-offset/fadeUntil;
              }
              fading.css('opacity',opacity);
          });
        } 
     