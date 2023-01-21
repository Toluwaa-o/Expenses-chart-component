let bars = document.querySelectorAll(".bar");
let prices = document.querySelectorAll(".price");

for (let i = 0; i < bars.length; i++) {
    bars[i].addEventListener("mouseover", function(e){
        e.preventDefault
        prices[i].style.visibility = "visible"
        setTimeout(function(){
            prices[i].style.visibility = "hidden"
        }, 1000)
    })
}