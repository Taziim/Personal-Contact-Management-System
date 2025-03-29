let input1 = document.getElementById('');

function alertpara(event) {
    alert("Event type: " + event.type);
}
document.getElementById("mobil-number-button").addEventListener("click", alertpara);
