document.addEventListener('DOMContentLoaded', ()=>{
    const arrayCards = [
        {
            name: "bonney",
            dir: "./images/bonney.png"
        },
        {
            name: "nami",
            dir: "./images/nami.svg"
        },
        {
            name: "hancock",
            dir: "./images/hancock.png"
        },
        {
            name: "monsherry",
            dir: "./images/monsherry.png"
        },
        {
            name: "porche",
            dir: "./images/porche.png"
        },
        {
            name: "tony",
            dir: "./images/tony.png"
        },
        {
            name: "usopp",
            dir: "./images/usopp.png"
        },
        {
            name: "zoro",
            dir: "./images/zoro.png"
        },
        {
            name: "luffy",
            dir: "./images/luffy.png"
        },
        {
            name: "bonney",
            dir: "./images/bonney.png"
        },
        {
            name: "nami",
            dir: "./images/nami.svg"
        },
        {
            name: "hancock",
            dir: "./images/hancock.png"
        },
        {
            name: "monsherry",
            dir: "./images/monsherry.png"
        },
        {
            name: "porche",
            dir: "./images/porche.png"
        },
        {
            name: "tony",
            dir: "./images/tony.png"
        },
        {
            name: "usopp",
            dir: "./images/usopp.png"
        },
        {
            name: "zoro",
            dir: "./images/zoro.png"
        },
        {
            name: "luffy",
            dir: "./images/luffy.png"
        }


    ]
    arrayCards.sort(()=> 0.5 - Math.random())
    var choose = [];
    var wincards = [];
    let score = 0;

    const grid = document.querySelector('.grid')
    function winner(){
        console.log(score)
        if(score === 9){
            alert('you win')
            setTimeout(()=>{
                wincards.map(card=>{
                    card.setAttribute('src', './images/blank.svg')
                })

            }, 500)
        }
    }
    function createBoard(){
        arrayCards.map((card, i)=>{
            var cardElement = document.createElement('img')
            cardElement.setAttribute('src', './images/blank.svg')
            cardElement.setAttribute('name', card.name)
            cardElement.setAttribute('data-id', i)
            cardElement.addEventListener('click', flipCard)
            grid.appendChild(cardElement)
        })
    }
    function flipCard(){
        
        choose.push(this)
        console.log(choose.length)
        this.setAttribute('src', arrayCards[this.getAttribute('data-id')].dir)
        if(choose.length == 2){
            if(choose[0].name === choose[1].name){
                setTimeout(()=>{
                    alert('You found a match ')
                    score += 1
                    winner()
                    document.getElementById('result').textContent = score
                    wincards.push(choose[0])
                    wincards.push(choose[1])
                    choose = []
                },200)
            }else{
                setTimeout(()=>{
                    choose[0].setAttribute('src', './images/blank.svg')
                    choose[1].setAttribute('src', './images/blank.svg')
                    choose= []
                },500)   
            }
        }
        
    }

    
    createBoard()
})

