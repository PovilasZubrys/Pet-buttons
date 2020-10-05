function myFunction() {
    var myLayer = document.getElementById("checkBox");
    console.log(myLayer);
    if (myLayer.checked != true) {
        myLayer.style.backgroundColor = "#D26546";
    } else {
        myLayer.style.backgroundColor = "white";
    }
}
// function myFunction2() {
//     const x = document.getElementById(checkBox);
//     console.log(x);
//     if (x.checked != false) {
//         x.style.backgroundColor = "#D26546";
//     } else {
//         x.style.backgroundColor = "white";
//     }
// }
// function myFunction3() {
//     const x = document.querySelector(".cont3");
//     console.log(x);
//     if (x.checked != false) {
//         x.style.backgroundColor = "#D26546";
//     } else {
//         x.style.backgroundColor = "white";
//     }
// }