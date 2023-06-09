$(document).ready(function(){
    
    let count = 0;
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