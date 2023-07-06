$(document).ready(function(){

    
    let pathLength = $("#progress path").get(0).getTotalLength()
    $("#progress path").css("stroke-dasharray",pathLength)
    $("#progress path").css("stroke-dashoffset",pathLength)

    $(window).scroll(function(){
        let winTop=$(window).scrollTop()
        let fixedTop=$(".fixedFrame").offset().top
        let scrollDistance = winTop-fixedTop
        let movingAreaTitle = $(".movingArea").height()
        

        if(scrollDistance<0){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")
        }
        
        if(scrollDistance>=0 && scrollDistance<=8000-movingAreaTitle){
            $(".movingArea").css("position","fixed")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top","0")

            let percent = (scrollDistance/(8000-movingAreaTitle)*100) //0~100까지의 수
            $("#progress path").css("stroke-dashoffset",pathLength-(pathLength*percent/100))
            $(".per").text(Math.round(percent)+"%")
            
            let percent2 = (scrollDistance/(8000-movingAreaTitle)*87.5) //0~87.5까지의 수
            $(".train").css("transform","translateX(-"+percent2+"%)")

            let count = (8000-movingAreaTitle)/(8000-movingAreaTitle)/8
            
        }

        if(scrollDistance>8000-movingAreaTitle){
            $(".movingArea").css("position","absolute")
            $(".movingArea").css("left","0")
            $(".movingArea").css("top",(8000-movingAreaTitle)+"px")
        }
    })

})