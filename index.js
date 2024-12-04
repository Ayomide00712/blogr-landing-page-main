var btn = document.querySelector("#click");
var show = document.querySelector(".media");

btn.addEventListener("click", function(){
    // console.log("owk");
    show.classList.toggle('show');
})


function MydropDowns(clicked){
   
    var gotten = clicked.children[0];
    gotten.classList.toggle('open');
 }