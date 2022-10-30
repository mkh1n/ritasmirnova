jQuery(document).ready(function($){ //wait for the document to load
    $('.trans-header').each(function(){ //loop through each element with the .dynamic-height class
        $(this).css({
            'height' : $(".header").height() + 'px' //adjust the css rule for margin-top to equal the element height - 10px and add the measurement unit "px" for valid CSS
        });
    });
});