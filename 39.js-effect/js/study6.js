$(document).ready(function(){

    let count =0;
    $(".btnnext").click(function(e){
        e.preventDefault() // 클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count++
        if(count > 4)[count = 0]
        $(".train").css("transform","translateY("+(count*-20)+"%)")
    })

    $(".btnprev").click(function(e){
        e.preventDefault() // 클릭했을 때 a태그의 기본기능을 억제(스크롤바가 가장위로 올라가는 현상 방지)
        count--
        if(count < 0)[count = 4]
        $(".train").css("transform","translateY("+(count*-20)+"%)")
    })

    let btn = setInterval(function(){
        count++
        if(count > 4)[count = 0]
        $(".train").css("transform","translateY("+(count*-20)+"%)")
    },2500)

    $(".station").mouseover(function(){
        clearInterval(btn)
    })

    $(".station").mouseout(function(){
        btn = setInterval(function(){
        count++
        if(count > 4)[count = 0]
        $(".train").css("transform","translateY("+(count*-20)+"%)")
    },2500)

})
})