window.onload = function(){
    let bannerDT = document.querySelectorAll(".bannerTabMenu>dt")
    for(i=0 ; i<bannerDT.length ; i++){
        bannerDT[i].addEventListener("click",function(){
            for(j=0 ; j<bannerDT.length ; j++){
                bannerDT[j].classList.remove("on")
            }
            this.classList.add("on")
            //클릭하는 맥락안에서 클릭한 태그를 this로 표현할 수 있다.
        })
    }

    let tabDT = document.querySelectorAll(".tabMenu>dt")
    for(i=0 ; i<tabDT.length ; i++){
        tabDT[i].addEventListener("click",function(){
            for(j=0 ; j<tabDT.length ; j++){
                tabDT[j].classList.remove("on")
            }
            this.classList.add("on")
            //클릭하는 맥락안에서 클릭한 태그를 this로 표현할 수 있다.
        })
    }

}

