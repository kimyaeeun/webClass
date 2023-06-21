$(document).ready(function(){

    $("dt").click(function(){
        $("dt").removeClass("show")
        $(this).addClass("show")

        $("dd").removeClass("on")
        $(this).next().addClass("on")
    })
})