// scroll transform nav
window.onscroll = function () {
    const nav = document.getElementById('nav');
    if (document.documentElement.scrollTop > 500) {
        nav.style.background= "rgba(0,0,0,0.5)";
    } else {
        nav.style.background = "none"
    }
}
// popup open
const kontak = document.querySelectorAll('.kontak');
kontak.forEach(card => {
    card.addEventListener('click', function () {
        const popup = this.querySelector('.popup');
        popup.style.display = "flex";
    })
})
const project = document.querySelectorAll('.view-link');
project.forEach(card => {
    card.addEventListener('click', function () {
        const popup = this.querySelector('.popup');
        popup.style.display = "flex";
    })
})
const closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.stopPropagation();
        const popup = this.closest('.popup');
        popup.style.display = 'none';
    });
});

// pemberitahuan kepada user
const kartu = document.querySelectorAll('.kartu_project');
kartu.forEach(card => {
    card.addEventListener('click', function () {
     alert('mohon maar server sedang dalam perbaikan')
    })
})
