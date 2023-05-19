function Dog(dogName,dogAge){
    this.name = dogName
    this.age = dogAge
    this.feel = Math.floor(Math.random()*3)
    this.say = function(){
        if(this.feel == 0){
            document.write(`멍멍! 나는${this.name}이다! 기분이가 좋다 멍멍!!<br>`)
        } else if(this.feel == 1){
            document.write(`${this.name}는 오늘 심심하군!! 뭐 먹을거 없나~ 멍멍~<br>`)    
        } else{
            document.write(`${this.name}는 지금 굉장히 화가 난다 왈왈오왈!! 밥 내놔라 왈!<br>`)
        }
    } 
}

