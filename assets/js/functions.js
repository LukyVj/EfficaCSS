$(document).ready(function(){

 var Bulllog = function bullog(opts) {
      /* creating a buffer to hold the styles passed as options */
      this.styleBuffer = [];
      /* next we iterate over the styles to fing the property: value; pairs */
      for(key in opts) {
        this.styleBuffer.push(key + ':' + opts[key] + ';');
      };
      /*
      because we get an array like ["prop: value", "prop: value"] we
      then convert our array to a string
      */
      var tmpStyle = this.styleBuffer.toString();
      /* and finally remove the commata between each property value pair */
      this.style = tmpStyle.replace(/\,/g, '');
    }

    Bulllog.prototype.msg = function(msg) {
      var msg = "%c" + msg;
      return console.log(msg, this.style);
    }

    var log = new Bulllog({
      'font-size': '3vw',
      'text-align': 'center',
      'font-family':'helvetica',
      color: '#1393d5',
      background: '#FFF',
      padding: '0.3em',
      'padding-left': "10%",
      'letter-spacing':"20px",
      'font-weigh':'bold',
      'font-style':'italic'
    });


 // Animate on scroll
  function animateScroll(){
        var $root = $('html:not(:animated), body:not(:animated)');
    $('.navbar a, .summary li a, .nav li a').click(function() {
        $root.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
  }

  // Show active menu links
  function activeLinksTop(){
    $menuLinks = $('.navbar li'),
    $menuLinkActive = $menuLinks.hasClass('active');

    $menuLinks.on('click', function(e){
      e.preventDefault();
      var $this = $(this);
      $this.addClass('active');
      $('.navbar li').not($this).removeClass('active');
    })
  }




function headerScroll(){
  var header = $('.navbar-fixed-top');
  var heightJumbo = '160';
  log.msg(heightJumbo)
  $(document).on('scroll', function(e){
    if($(window).scrollTop() > heightJumbo){
      header.addClass('inv');
    }else{
            header.removeClass('inv');
    }
  })
}

  function deploy(){
    log.msg("Welcome on EfficaCSS, the powerful OCSS Framework.");

    animateScroll();
    activeLinksTop();
    headerScroll();
  }



  deploy();

});
