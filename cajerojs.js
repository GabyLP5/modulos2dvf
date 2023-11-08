function withdrawMoney() {
    var retiro = parseInt(document.getElementById("retiro").value);
    var messageElement = document.getElementById("message");

    if (isNaN(retiro) || retiro <= 0) {
        messageElement.textContent = "Ingrese una cantidad válida.";
    } else {
        var denominations = [100, 50, 20, 10, 5, 1];
        var result = {};

        for (var i = 0; i < denominations.length; i++) {
            var denomination = denominations[i];
            var count = Math.floor(retiro / denomination);
            if (count > 0) {
                result[denomination] = count;
                retiro = retiro % denomination;
            }
        }

        if (retiro === 0) {
            var message = "Retire su dinero:<br>";
            for (var key in result) {
                if (result.hasOwnProperty(key)) {
                    message += key + "€: " + result[key] + "<br>";
                }
            }
            messageElement.innerHTML = message;
        } else {
            messageElement.textContent = "No se puede dispensar la cantidad solicitada.";
        }
    }
}
