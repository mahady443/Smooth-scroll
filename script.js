jQuery(document).ready(function(){
    jQuery('.scrollto').click(function(){
        var getElement = jQuery(this).attr('href');
        if(jQuery(getElement).length){
            var getOffset = jQuery(getElement).offset().top;
            jQuery('html,body').animate({
            scrollTop:getOffset},300)
        
        }
    });
    


});