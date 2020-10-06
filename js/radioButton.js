function selectOnlyThis(id) {
    const setBackground = document.querySelectorAll('.container');
    const button = document.getElementById('cartButton');
    for (var i = 0; i < setBackground.length; i++){
        var mygt = document.getElementById("Check" + i).checked = false;
        if (id === 'Check0') {
            button.setAttribute("href", "http://www.facebook.com");
            console.log(button);
            setBackground[0].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check1') {
            button.setAttribute("href", "http://www.reddit.com");
            console.log(button);
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check2') {
            button.setAttribute("href", "http://www.google.com");
            console.log(button);
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        }
        document.getElementById(id).checked = true;
        console.log(button);
    }

}
// function paspaudimas(){
//     if(document.getElementById('Check1').checked === true){
//         console.log('Pirmasis!!!');
//     } else if(document.getElementById('Check2').checked === true) {
//         console.log('Antrasis!!!');
//     } else if(document.getElementById('Check3').checked === true) {
//         console.log('Trečiasis!!!');
//     } else {
//         console.log('Nepasirinktas');
//     }
// }