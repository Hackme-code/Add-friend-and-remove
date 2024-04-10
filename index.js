var istatus = document.querySelector("h5")
var add = document.querySelector("#add")
// var btn = document.querySelector("button")
var remove = document.querySelector("#Removefrnd")



add.addEventListener("click", function(){
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
})
remove.addEventListener("click", function(){
    istatus.innerHTML = "Stranger"
    istatus.style.color = "Grey"
})
