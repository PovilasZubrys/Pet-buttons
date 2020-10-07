function selectOnlyThis(id) {
    
    const setBackground = document.querySelectorAll('.container');
    const button = document.getElementById('cartButton');
    var price = document.querySelector("span.price")
    var oldPrice = document.querySelector("span.oldPrice")

    for (var i = 0; i < setBackground.length; i++){
        var mygt = document.getElementById("Check" + i).checked = false;
        if (id === 'Check0') {
            button.setAttribute("href", "http://www.facebook.com"); // 1 Linkas kurį kels į HTML
            oldPrice.textContent = "55.45$" // Sena kaina
            price.textContent = "35.95$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check1') {
            button.setAttribute("href", "http://www.reddit.com"); // 2 Linkas kurį kels į HTML
            oldPrice.textContent = "145.65$" // Sena kaina
            price.textContent = "99.99$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check2') {
            button.setAttribute("href", "http://www.google.com"); // 3 Linkas kurį kels į HTML
            oldPrice.textContent = "195.55" // Sena kaina
            price.textContent = "150.00$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        }
        document.getElementById(id).checked = true;
    }
}