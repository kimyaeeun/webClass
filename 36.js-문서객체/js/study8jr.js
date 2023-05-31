$(document).ready(function(){
    $(".tabTit>li").click(function(){
        $(".tabTit>li").removeClass("on")
        $(this).addClass("on")
        let idx = $(this).index()
        //index()함수는 앞에 선택된 태그의 부모태그기준 순번을 리턴함
        $(".tabDes").html(tabDescription[idx])
    })
})