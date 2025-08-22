import styles from './Navigation2.module.css'

export default function Dropdown(){
    const dropdowns = document.querySelectorAll(styles.dropdown)	

    dropdowns.forEach(dropdown =>{
        const menu = dropdown.querySelector(styles.dropdown_menu)
        dropdown.addEventListener('mouseenter', () => {
            menu.style.display = 'block'
            menu.style.opacity = '1';
        })


    })
}