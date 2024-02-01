const projectsContainer = document.querySelector('.projects-container')


document.addEventListener('DOMContentLoaded', function(e){
    const mobile = document.getElementById('mobile')
    const closeNav = document.querySelector('.close-nav')


    mobile.addEventListener('click', function(e){
        showNavBar()
    })

    closeNav.addEventListener('click', function(e){
        hideNavBar()
    })

    fetch('data.json')
    .then(response => response.json())
    .then(data=> {
        populateProjectsUi(data.projects)
    })

    
})

const randomInt = (min,max) => Math.trunc(Math.random() * (max-min)+1) + min


function populateProjectsUi(projects){
    projects.forEach(function(project){
        console.log(project)
        const projectItem= `<div class="project-item">
        <div class="project-image-container">
            <img src="${project.img}" alt="Project image" class="project-image" loading="lazy">
        </div>
    
        <div class="project-details-container">
            <h2 class="project-title">Data Gridder</h2>
            <p class="project-description">
               ${project.description}
            </p>
    
            <div class="project-links-container">
                <i class="ri-github-line"></i>
                <i class="ri-external-link-line"></i>
            </div>
    
            <div class="languages-container">
                <h4>Languages</h4>
                <div class="language-items-container languages-${project.id}">
                </div>
            </div>
        </div>
    </div>`   

    projectsContainer.insertAdjacentHTML("beforeend", projectItem)

    const projectLanguages = document.querySelector(`.languages-${project.id}`)
    project.languages.forEach(function(language){
        const languageHTML = `<div class="language-item">
        <span class="circle-sm lang-sm circle-sm-bg-${randomInt(1,4)}" ></span>
        <p>${language}</p>
    </div>
`
    if(projectLanguages){
        projectLanguages.insertAdjacentHTML('beforeend', languageHTML)
    }


    })
})
  
}


function showNavBar(){
    const blurrables = document.querySelectorAll('.blurrable')
    blurrables.forEach((blurrable)=>{
        blurrable.classList.add('blurred')
    })


    const navBar = document.querySelector('.nav')
    navBar.classList.add('visible')
   
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