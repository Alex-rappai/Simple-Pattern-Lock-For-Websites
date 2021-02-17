jQuery(document).ready(function(){
  
      "use strict";
       $('#slider-carousel').caroufredsel({
           responsive:true,
           width:'100%',
           circular:true,
           scroll:{
                    item:1,
                    duration:900,
                    pauseOnHover:true
          },
          auto:true,
          items:
        {
            visible:{
                     main:1,
                     max:1
                     },
                      height:"variable"
                      },
                      pagination:{ 
                              container:".sliderpager",
                              pageAnchorBuilder:false
                      }
                });



});