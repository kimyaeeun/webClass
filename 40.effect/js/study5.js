$(document).ready(function(){

    //마우스를 움직이면 cursor클래스가 따라다니도록
    $(document).mousemove(function(event){
        let posX = event.clientX-15
        let posY = event.clientY-15

        $(".cursor").css("left",posX+"px")
        $(".cursor").css("top",posY+"px")
        $(".cursor").addClass("on")


        $(".cusorguideBox").css("left",(posX+150)+"px")
        $(".cusorguideBox").css("top",(posY+150)+"px")
    })

    $(".slider").mouseover(function(){
        $(".cursor").addClass("big")
        let txt = $(".slider").attr("data-desc")
        $(".cusorguideBox").text(txt)
    })


    $(".slider").mouseout(function(){
        $(".cursor").removeClass("big")
    })
})