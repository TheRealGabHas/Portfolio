let dialog = document.getElementById('credits-dialog');
let showBtn = document.getElementById('show');
let isShown = false;

document.getElementById('show').onclick = () => {
    if (isShown) {
        dialog.close();
        showBtn.innerHTML = 'See credits';
        isShown = false;
    } else {
        dialog.show();
        showBtn.innerHTML = 'Close credits';
        isShown = true;
    }
    window.scrollTo(0, document.body.scrollHeight);
};