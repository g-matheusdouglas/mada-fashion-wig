function mudouTamanho() {
    if (window.innerWidth >= 768) {
        imenu.style.display = 'block'
    } else {
        imenu.style.display = 'none'
    }
}

function clickMenu() {
    if (imenu.style.display == 'block') {
        imenu.style.display = 'none'
    } else {
        imenu.style.display = 'block'
    }

}