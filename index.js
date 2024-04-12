var istatus = document.querySelector("h5")
var state = document.querySelector("h3")
var add = document.querySelector("#add")
// var btn = document.querySelector("button")
var remove = document.querySelector("#Removefrnd")
var love = document.querySelector(".icon1")
var crack = document.querySelector(".icon2")
var block = document.querySelector("#block")
var image = document.querySelector("#image")
var check = 1;


add.addEventListener("click", function(){
    love.style.opacity = 1
    state.innerHTML = 'You are now connected on facebook'
    istatus.innerHTML = 'Friends'
    istatus.style.color = 'Green'
    crack.style.opacity = 0
    image.style.opacity = 1
   
})
    remove.addEventListener("click", function(){
        state.innerHTML = 'You are no longer friends'
        istatus.innerHTML = 'Stranger'
        istatus.style.color = 'Grey'
        love.style.opacity = 0
        crack.style.opacity = 1
        image.style.opacity = 0.5
    })

    
    block.addEventListener("click", function(){


       if(check == 1){
        state.style.color = 'blue'
        crack.style.opacity = 0
        istatus.innerHTML = 'Learn more'
       state.innerHTML = 'This person is unavailable'
       image.style.opacity = 0
       check = 0;
       block.innerHTML = 'Unblock'
        }
        else{
            block.innerHTML = 'Block'
            image.style.opacity = 1
            state.innerHTML = 'Ankita Timalsina'
            istatus.innerHTML = 'Stranger'
            check = 1;
            
        }
        
    })
        
      
    
    
