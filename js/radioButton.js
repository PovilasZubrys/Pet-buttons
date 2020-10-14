function selectOnlyThis(id) {
    
    const setBackground = document.querySelectorAll('.container');
    const buttonOneTime = document.getElementById('cartButtonOneTime');
    const buttonSubscription = document.getElementById('cartButtonSubscription');
    var price = document.querySelector("span.price")
    var oldPrice = document.querySelector("span.oldPrice")

    for (var i = 0; i < setBackground.length; i++){
        var mygt = document.getElementById("Check" + i).checked = false;
        if (id === 'Check0') {
            buttonOneTime.setAttribute("href", "http://www.15min.lt"); // 1 Linkas kurį kels į HTML (OneTimePurchase)
            oldPrice.textContent = "55.45$" // Sena kaina
            price.textContent = "35.95$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[3].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[4].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[5].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check1') {
            buttonOneTime.setAttribute("href", "http://www.delfi.lt"); // 2 Linkas kurį kels į HTML (OneTimePurchase)
            oldPrice.textContent = "145.65$" // Sena kaina
            price.textContent = "99.99$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[3].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[4].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[5].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check2') {
            buttonOneTime.setAttribute("href", "http://www.lrytas.lt"); // 3 Linkas kurį kels į HTML (OneTimePurchase)
            oldPrice.textContent = "195.55" // Sena kaina
            price.textContent = "150.00$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[3].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[4].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[5].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check3') {
            buttonSubscription.setAttribute("href", "http://www.facebook.com"); // 1 Linkas kurį kels į HTML (Subscription)
            oldPrice.textContent = "55.45$" // Sena kaina
            price.textContent = "35.95$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[3].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[4].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[5].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check4') {
            buttonSubscription.setAttribute("href", "http://www.reddit.com"); // 2 Linkas kurį kels į HTML (Subscription)
            oldPrice.textContent = "145.65$" // Sena kaina
            price.textContent = "99.99$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[3].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[4].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[5].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        } else if (id === 'Check5') {
            buttonSubscription.setAttribute("href", "http://www.google.com"); // 3 Linkas kurį kels į HTML (Subscription)
            oldPrice.textContent = "195.55" // Sena kaina
            price.textContent = "150.00$" // Nauja kaina
            // keičia radio pasirinkimo fonus
            setBackground[0].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[1].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[2].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[3].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[4].removeAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
            setBackground[5].setAttribute("style", "background-color: #D26546; border-radius: 10px; color: white;");
        }
        document.getElementById(id).checked = true;
    }
}