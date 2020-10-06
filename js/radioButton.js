function selectOnlyThis(id) {
    for (var i = 1;i <= 3; i++) {
        var mygt = document.getElementById("Check" + i).checked = false;
    }
        document.getElementById(id).checked = true;
    }
function paspaudimas(){       
    if(document.getElementById('Check1').checked === true){
        console.log('Pirmasis!!!');
        window.open("http://www.google.lt","_self")
    } else if(document.getElementById('Check2').checked === true) {
        console.log('Antrasis!!!');
        window.open("http://www.facebook.com","_self")
    } else if(document.getElementById('Check3').checked === true) {
        console.log('Trečiasis!!!');
        window.open("http://www.reddit.com","_self")
    } else {
        console.log('Nepasirinktas');
    }
}