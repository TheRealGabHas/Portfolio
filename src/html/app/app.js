let dialog = document.getElementById('credits-dialog');
document.getElementById('show').onclick = () => {
    dialog.show();
    window.scrollTo(0, document.body.scrollHeight);
};
document.getElementById('hide').onclick = () => {
    dialog.close();
};