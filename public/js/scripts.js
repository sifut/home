function sendMail(oFormElement, formType) {
    var xhr = new XMLHttpRequest();
    var action = oFormElement.action + '?subject=' + formType;
    xhr.open(oFormElement.method, action, true);
    showMessage(formType);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("Enviando mail :)");
            if (xhr.responseText == 'OK') {
                oFormElement.reset();
                // Su información ha sido enviada con éxito.
                if (formType == 1) {
                    showMessage(3);
                }
                else {
                    showMessage(4);
                }
            }
            else {
                // Ha ocurrido un error, intente enviar la información de nuevo.
                if (formType == 1) {
                    showMessage(5);
                }
                else {
                    showMessage(6);
                }
            }
        }
    }
    xhr.send(new FormData(oFormElement));
    return false; // Markus had to return true
}

function showMessage(formType) {
    switch (formType) {
    case 1: // Esperando para mandar curriculum
        document.getElementById("idError").style.visibility = "hidden";
        document.getElementById("idExito").style.visibility = "hidden";
        document.getElementById("idEnviando").style.visibility = "visible";
        break;
    case 2: // Esperando al enviar solicitud de servicio o producto
        document.getElementById("idError2").style.visibility = "hidden";
        document.getElementById("idExito2").style.visibility = "hidden";
        document.getElementById("idEnviando2").style.visibility = "visible";
        break;
    case 3: // Éxito al enviar curriculum
        document.getElementById("idError").style.visibility = "hidden";
        document.getElementById("idEnviando").style.visibility = "hidden";
        document.getElementById("idExito").style.visibility = "visible";
        break;
    case 4: // Éxito al enviar solicitud de servicio o producto
        document.getElementById("idError2").style.visibility = "hidden";
        document.getElementById("idEnviando2").style.visibility = "hidden";
        document.getElementById("idExito2").style.visibility = "visible";
        break;
    case 5: // Error al enviar curriculum
        document.getElementById("idExito").style.visibility = "hidden";
        document.getElementById("idEnviando").style.visibility = "hidden";
        document.getElementById("idError").style.visibility = "visible";
        break;
    case 6: // Error al enviar solicitud de servicio o producto
        document.getElementById("idExito2").style.visibility = "hidden";
        document.getElementById("idEnviando2").style.visibility = "hidden";
        document.getElementById("idError2").style.visibility = "visible";
        break;
    }
}
window.onload = function () {
    var d = new Date();
    document.getElementById("idYear").innerHTML = "Copyright © " + d.getFullYear() + " SIFUT";
}

function ocultarMenu() {
    document.getElementById('chkMM').checked = false;
}