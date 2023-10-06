document.addEventListener('DOMContentLoaded', function(e){
    const mobile = document.getElementById('mobile')
    const closeNav = document.querySelector('.close-nav')


    mobile.addEventListener('click', function(e){
        showNavBar()
    })

    closeNav.addEventListener('click', function(e){
        hideNavBar()
    })
})

function showNavBar(){
    const navBar = document.querySelector('.nav')
    navBar.classList.add('visible')

    const blurrables = document.querySelectorAll('.blurrable')
    blurrables.forEach((blurrable)=>{
        blurrable.classList.add('blurred')
    })
}

function hideNavBar(){
    const navBar = document.querySelector('.nav')
    navBar.classList.remove('visible')

    const blurrables = document.querySelectorAll('.blurrable')
    blurrables.forEach((blurrable)=>{
        blurrable.classList.remove('blurred')
    })
}

function blurBlurrables(){
    const blurrables = document.querySelectorAll('.blurrable')
    blurrables.forEach((blurrable)=>{
        blurrable.classList.add('blurred')

        blurrable.onclick = ()=>{
            console.log('clicked on a blurrable')
            hideNavBar()
        }
    })
}