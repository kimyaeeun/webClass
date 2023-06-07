window.onload = function(){

    let newsSlider = new Swiper(".news_station",{
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:3,
            },
        }
    })
    

    let noticeSlider = new Swiper(".notice_station",{
        pagination: {
            el: '.notice-pagination',
            clickable: true,
          },
          breakpoints:{
            280:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:4,
                spaceBetween:20,
            },
        },

    })



}