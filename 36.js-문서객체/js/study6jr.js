$(document).ready(function(){
    let menuState = false;
    $(".btnMenu").click(function(){
        //btnMenu클래스를 클릭했을 때 실행될 동작
        if(menuState == false){
        //메뉴가 현재 닫혀있는 상태 -> 여는 기능
            $(".btnMenu").addClass("close")
            $("nav").addClass("show")   
            menuState = true
        }else{
        //메뉴가 현재 열려있는 상태 -> 닫는 기능            
            $(".btnMenu").removeClass("close")
            $("nav").removeClass("show")
            menuState = false
        }

        })  
    
})
