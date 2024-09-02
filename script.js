function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const popup = document.getElementById('popup');
        popup.classList.add('show');
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2000);
    });
}
