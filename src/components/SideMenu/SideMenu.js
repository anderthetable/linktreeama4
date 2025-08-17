export default function SideMenu() {
    const hamburguer_btn = document.getElementById('hamburguer-btn')
    const close_btn = document.getElementById('close-btn')
    const side_menu = document.getElementById('side-menu')
    const overlay = document.getElementById('menu-overlay')

    const openMenu = () => {
        console.log('openMenu')

        side_menu.classList.add('active')
        overlay.classList.add('active')
        document.body.style.overflow = 'hidden';
    }
    const closeMenu = () => {
        side_menu.classList.remove('active')
        overlay.classList.remove('active')
        document.body.style.overflow = '';
    }

    hamburguer_btn.addEventListener('click', openMenu)
    close_btn.addEventListener('click', closeMenu)
}