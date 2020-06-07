document.addEventListener('DOMContentLoaded', ()=>{
    console.log("Loaded")
    document.querySelector('.links').addEventListener('mouseover', hongo)
    document.querySelector('.links').addEventListener('click', hongo)
    
        function hongo(e){
            if(e.target.classList.contains("link")){
                if(!e.target.classList.contains('hover')){
                    
                    document.querySelector('.hover').parentElement.childNodes[1].setAttribute('src', '')
                    document.querySelector('.hover').classList.remove('hover')
    
                    e.target.childNodes[1].setAttribute('src', './resourses/hongo.svg')
                    e.target.childNodes[3].classList.add('hover')
                }
            }
        }


})