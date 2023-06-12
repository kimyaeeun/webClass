$(document).ready(function(){
    
    let count = 0;
    let perView;
    //train 클래스 너비를 변경 => train 클래스의 너비를 불러와서 perView로 나눈 후 결과를 다시 적용
    let stationWidth;
    let trainWidth;
    let winWidth = $(window).width()
        if(winWidth>=1024){
            console.log("pc사이즈 입니다.")
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else if(winWidth>=768){
            console.log("태블릿 사이즈 입니다.")
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else{
            console.log("모바일 사이즈 입니다.")
            perView = 1
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }

    $(window).resize(function(){
        let winWidth = $(window).width()
        if(winWidth>=1024){
            console.log("pc사이즈 입니다.")
            perView = 2.5
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else if(winWidth>=768){
            console.log("태블릿 사이즈 입니다.")
            perView = 2
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }else{
            console.log("모바일 사이즈 입니다.")
            perView = 1
            stationWidth = $(".station").width()
            trainWidth = stationWidth * 5 / perView
            $(".train").width(trainWidth)
        }
    })

    $(".btnnext").click(function(e){
        count++;
        e.preventDefault()
        if(count>4){count=4}
        moveSlider(count)
    })

    $(".btnprev").click(function(e){
        e.preventDefault
        count--
        if(count<0){count=0}
        moveSlider(count)
    })

    function moveSlider(idx){
        $(".train").css("transform","translateX(-"+(20*idx)+"%)")
    }
    // moveSlider(2)
})