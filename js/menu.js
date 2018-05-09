$(document).ready(main);

    var contador = 1;

    function main() {
        $('.openclose').mouseenter(function() {
            if (contador == 1) {
               
                $("nav").show('slow');
               
                contador = 0;
            } else {
                contador = 1;
              
               $("nav").hide('slow');
            }
        });
    }
