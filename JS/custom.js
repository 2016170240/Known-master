$(document).ready(function()
{
//Preloader spinnr effect 
/*
$(".mybody").css("display","none");

$(".preloader").fadeOut(2000,function(){
    $(".mybody").css("display","block")
});*/
var w=$(window).height();
$(".carousel-item").height(w-60);

/*fire nicescroll plugin */
$("html").niceScroll({
    cursorcolor:"#29CA8E",
    cursorwidth:"11px",
    cursorheight:"200px",
    cursorborder:"none",
    cursorborderradius:"none",
    
    background:"#fff",
});
/*fire WOW*/
new WOW().init();
/*fire owel caruesal */
$('.mycourses').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        500:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
        },
       900:{
            items:2,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        1200:{
            items:3,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        }
    }
})


$('.student-rev').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            autoplayHoverPause:true
        },
        500:{
            items:1,
            nav:true,
            loop:true,
            autoplay:true,
   /* autoplayTimeout:4000,
    autoplayHoverPause:true*/
        },
       900:{
            items:2,
            nav:true,
            loop:true,
            autoplay:true,
            /*autoplayTimeout:4000,
            //autoplayHoverPause:true*/
        },
        1200:{
            items:3,
            nav:true,
            loop:true,
            autoplay:true,
           /* autoplayTimeout:4000,
           // autoplayHoverPause:true*/
        }
    }
})
//set shadow of navbar 
$(window).scroll(function()
{
   if(w>222)
   {
      $(".navbar").css("boxShadow"," 3px 3px 20px #eeee")
   }
   else
   {
    $(".navbar").css("boxShadow"," none")
   }

   //from left button 

})
   
$(".from-left,border-from-left").hover(function(){
    $(this).find("span").eq(0).animate({
        width:"100%"
    },200 ,function(){
        $(".from-left").css({
            "border":"1px solid #29CA8E","color":"#fff"
        })
    })
})

$(".from-left,border-from-left").mouseleave(function(){
    $(this).find("span").eq(0).animate({
        width:"0"
    },200 ,function(){
        $(".from-left").css({
            "border":"1px solid #000","color":"#fff"
        })  })
});

$(".finput").focusin(function(){
    $(".finput span").animate({
        width:"71%"
    },500,function(){
        $(".finput input").css({
            "border":"none"
        })
    })
}
)

$(".finput").focusout(function(){
    $(".finput span").animate({
        width:"0%"
    },500,function(){
        $(".finput input").css({
            "borderBottom":"1px solid #000"
        })
    })
}
)




$(".sinput").focusin(function(){
    $(".sinput span").animate({
        width:"71%"
    },500,function(){
        $(".sinput input").css({
            "border":"none"
        })
    })
}
)

$(".sinput").focusout(function(){
    $(".sinput span").animate({
        width:"0%"
    },500,function(){
        $(".sinput input").css({
            "borderBottom":"1px solid #000"
        })
    })
}
)







$(".tinput").focusin(function(){
    $(".tinput span").animate({
        width:"71%"
    },500,function(){
        $(".tinput input").css({
            "border":"none"
        })
    })
}
)

$(".tinput").focusout(function(){
    $(".tinput span").animate({
        width:"0%"
    },500,function(){
        $(".tinput input").css({
            "borderBottom":"1px solid #000"
        })
    })
}
)
$("a").on("click",function(e){
    e.preventDefault();
});
  /*to top button*/
  $(window).scroll(function(){
    if($(window).scrollTop() >=300)
             {
                 
                 $(".toup ").fadeIn();
             }
         else
             {
                 $(".toup ").fadeOut();
             }
     $(".toup ").click(function(){
        
         $("html,body").animate({scrollTop:0},'500')
     })

})
var blockid=$(this).attr("id");
console.log(blockid);
$(window).scroll(function(){
    $(".block").each(function(){
        if($(window).scrollTop() > $(this).offset().top)
            {
                var blockid=$(this).attr("id");
                $(".nav-item ").removeClass("active");
                $(".nav-item[data-scroll='"+blockid+"']").addClass("active");
            }
    });
});
$(".navbar-nav .nav-item ").click(function(e){
    e.preventDefault();
    console.log($(this).data("scroll"));
    $("html,body").animate({
        scrollTop:$("#"+$(this).data("scroll")).offset().top+40
    },1000)
});
});