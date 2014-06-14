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




  function deploy(){
    log.msg("Welcome on EfficaCSS, the powerful OCSS Framework.")
  }



  deploy();

});
