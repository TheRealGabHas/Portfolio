document.addEventListener('click', () => {
    let dialog = document.getElementById('credits-dialog');
    document.getElementById('show').onclick = () => {
        dialog.show();
    };
    document.getElementById('hide').onclick = () => {
        dialog.close();
    };
})