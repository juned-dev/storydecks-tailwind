window.onload = () => {
    const menuToggle = document.querySelector('.menu-toggle-button')
    const headerRight = document.querySelector('.header-right')
    const backDrop = document.querySelector('.backdrop')
    const menuClose = document.querySelector('.menu-close')

    menuToggle.onclick = () =>{
        headerRight.classList.toggle('active')
        backDrop.classList.toggle('active')
    }
    menuClose.onclick = () =>{
        headerRight.classList.remove('active')
        backDrop.classList.remove('active')

    }

    const signupButton = document.querySelector('.sign-up-btn')
    const modalPopup = document.querySelector('.storydeck-modal')
    const modalPopupClose = document.querySelector('.storydeck-modal-close')

    signupButton.onclick = () =>{
        modalPopup.classList.add('active')
        backDrop.classList.add('active')
        headerRight.classList.remove('active')
    }
    modalPopupClose.onclick = () =>{
        modalPopup.classList.remove('active')
        backDrop.classList.remove('active')
    }
}