addEventListener('DOMContentLoaded', () => {
    const icon_menu = document.querySelector('.icon-menu')

    if (icon_menu) {
        icon_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})