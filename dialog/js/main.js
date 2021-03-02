var dialog = document.querySelector('dialog');
var OpenModal = document.querySelector('button:first-of-type');
var CloseModal = document.querySelector('dialog button');

OpenModal.addEventListener('click', function () {
    dialog.open = true
})
CloseModal.addEventListener('click', function () {
    dialog.close()
})
