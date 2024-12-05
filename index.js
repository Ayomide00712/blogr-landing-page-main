
var btn = document.querySelector("#click");
var show = document.querySelector(".media");
var dropdownItems = document.querySelectorAll(".items"); // Select all dropdown items

btn.addEventListener("click", function () {

    show.classList.toggle("show");
});

function MydropDowns(clicked) {
    dropdownItems.forEach(item => {
        var child = item.children[0]; 
        if (item !== clicked && child.classList.contains("open")) {
            child.classList.remove("open");
        }
    });

    // Toggle the current dropdown
    var gotten = clicked.children[0];
    gotten.classList.toggle("open");
}
