class Projects {
    constructor(name, lanugages){
        this.name =name;
        this.lanugages = lanugages;
    }
}



document.addEventListener('DOMContentLoaded', function(e){
    const mobile = document.getElementById('mobile')
    const closeNav = document.querySelector('.close-nav')


    mobile.addEventListener('click', function(e){
        showNavBar()
    })

    closeNav.addEventListener('click', function(e){
        hideNavBar()
    })

    listOfProjects = populateProjectList()
    var languagesbars = document.querySelectorAll(".languages-bar");
    languagesbars.forEach(function(lanuguagebar){
        barid = lanuguagebar.id
        setupLanugageBar(barid)
    })
})

function setupLanugageBar(barid){
    let lanugageBar = document.getElementById(barid)
    console.log(lanugageBar.offsetWidth)
}

function showNavBar(){
    const blurrables = document.querySelectorAll('.blurrable')
    blurrables.forEach((blurrable)=>{
        blurrable.classList.add('blurred')
    })


    const navBar = document.querySelector('.nav')
    navBar.classList.add('visible')
   
}

function populateProjectList(){
    let productList = []
    let datagridderskills = {
        "SCSS": 29,
        "CSS": 27.4,
        "HTML": 12.9,
        "Python": 10.9,
        "JavaScript": 10.8
    }

    let datagridder = new populateProjectList('datagridder', datagridderskills)
    productList.push(datagridder)

    return productList
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