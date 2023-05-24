window.onload = function(){
    
    let tabTitles = document.querySelectorAll(".tabTit>li")
    let tabDes = document.querySelector(".tabDes")
    let tabDescription = [
        `<h3>title1</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam natus provident iure asperiores omnis tempora, ullam dignissimos culpa nobis, quia cupiditate rerum ipsa delectus sed! Consequatur quas at perferendis voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptas quisquam laudantium sapiente, itaque esse ab amet suscipit. Officiis neque laudantium exercitationem recusandae soluta necessitatibus, odit quam ducimus velit minus!</p>`,
    `<h3>title2</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam natus provident iure asperiores omnis tempora, ullam dignissimos culpa nobis, quia cupiditate rerum ipsa delectus sed! Consequatur quas at perferendis voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptas quisquam laudantium sapiente, itaque esse ab amet suscipit. Officiis neque laudantium exercitationem recusandae soluta necessitatibus, odit quam ducimus velit minus!</p>`,
    `<h3>title3</h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam natus provident iure asperiores omnis tempora, ullam dignissimos culpa nobis, quia cupiditate rerum ipsa delectus sed! Consequatur quas at perferendis voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia voluptas quisquam laudantium sapiente, itaque esse ab amet suscipit. Officiis neque laudantium exercitationem recusandae soluta necessitatibus, odit quam ducimus velit minus!</p>`
]
    for(let i=0 ; i<tabTitles.length ; i++){
        tabTitles[i].addEventListener("click",function(e){

            for(let j=0 ; j<tabTitles.length ; j++){
                tabTitles[j].classList.remove("on") 
            }
            this.classList.add("on")
            
            tabDes.innerHTML = tabDesription[i]
        })
        
    }


}
