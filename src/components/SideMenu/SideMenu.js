import styles from './SideMenu.module.css'

export default function SideMenu() {
    const hamburguer_btn = document.getElementById('hamburguer-btn')
    const close_btn = document.getElementById('close-btn')
    const side_menu = document.getElementById('side-menu')
    const overlay = document.getElementById('menu-overlay')

    const openMenu = () => {
        console.log('openMenu')

        side_menu.classList.add(styles.active)
        overlay.classList.add(styles.active)
        document.body.style.overflow = 'hidden';
    }
    const closeMenu = () => {
        side_menu.classList.remove(styles.active)
        overlay.classList.remove(styles.active)
        document.body.style.overflow = '';
    }

    hamburguer_btn.addEventListener('click', openMenu)
    close_btn.addEventListener('click', closeMenu)
}