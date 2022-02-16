const cuponInput = document.getElementById('cupon');
const cuponButton = document.getElementById('btn');
cuponInput.addEventListener('keyup', function() {

    if (cuponInput.value != '') {
        cuponButton.disabled = false;
    } else {
        cuponButton.disabled = true;
    }
});

cuponButton.addEventListener('click', function() {
    console.log(cuponInput.value);
});