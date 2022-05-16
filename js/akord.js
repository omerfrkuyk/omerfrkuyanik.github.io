

$(function(){
    $("#btnTransform").click(function(){
        $(this).hide();
        $(".accordion").addClass("q-accordion");
        $(".accordion h3").click(function(){
           // if ($(this).hasClass("active")) return;
            $(".accordion h3.active").removeClass("active")
            .next()
            .slideUp();

            $(this).addClass("active").next().slideDown();
        })
       
    })
    
}
)