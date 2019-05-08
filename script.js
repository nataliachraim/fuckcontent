  var i = 0;
        var txt = 'In Designer as Author I argued that we are insecure about the value of our work. We are envious of the power, social position and cachet that artists and authors seem to command. By declaring ourselves “designer/authors” we hope to garner similar respect. Our deep-seated anxiety has motivated a movement in design that values origination of content over manipulation of content. Designer as Author was an attempt to recuperate the act of design itself as essentially linguistic—a vibrant, evocative language. However, it has often been read as a call for designers to generate content: in effect, to become designers and authors, not designers as authors. While I am all for more authors, that was not quite the point I wanted to make. Designer as Author was an attempt to recuperate the act of design itself as essentially linguistic—a vibrant, evocative language. However, it has often been read as a call for designers to generate content: in effect, to become designers and authors, not designers as authors. While I am all for more authors, that was not quite the point I wanted to make.';
        var speed = 50;

        function typeWriter() {
        if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        } 
    }

//The below script will keep the panel float on normal state
 $(function () {
        $(document).on('scroll', function () {
            //Multiplication value shall be changed based on user window
            $('#MyFloatPanel').css('top', 4 * ($(window).scrollTop() / 5));
        });
    });
 //To make the panel float over a bootstrap model which has z-index: 2300, so i specified custom value as 2400
 $(document).on('click', '.btnSearchView', function () {
      $('#MyFloatPanel').addClass('PanelFloat');
  });

  $(document).on('click', '.btnSearchClose', function () {
      $('#MyFloatPanel').removeClass('PanelFloat');
  });