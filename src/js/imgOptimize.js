export const optimize = () => {
    const img = document.querySelector('.avatar');
    const new_img = new Image();
    new_img.src = img.getAttribute('src');
    new_img.onload = () => {
        img.classList.remove('avatar__default')
    }
}