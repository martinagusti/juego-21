"use strict"
 
/* juega la casa !!! */
const carta1 = document.getElementById("carta1")
const carta2 = document.getElementById("carta2")
const carta3 = document.getElementById("carta3")
const carta4 = document.getElementById("carta4")
const carta5 = document.getElementById("carta5")
const carta6 = document.getElementById("carta6")

const carta7 = document.getElementById("carta7")
const carta8 = document.getElementById("carta8")
const carta9 = document.getElementById("carta9")
const carta10 = document.getElementById("carta10")
const carta11 = document.getElementById("carta11")
const carta12 = document.getElementById("carta12")

const h2 = document.getElementById("h2")
const h2_casa = document.getElementById("h2_casa")
const btn_aceptar = document.getElementById("btn_aceptar")
const btn_cancelar = document.getElementById("btn_cancelar")

const modal_container = document.getElementById("modal_container")
const modal_container3 = document.getElementById("modal_container3")



let cartas = [1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10, 1,2,3,4,5,6,7,8,9,10,10,10,10,1,2,3,4,5,6,7,8,9,10,10,10,10]

let img_naipes = ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "aj", "aq", "ak", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "aj", "aq", "ak", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "aj", "aq", "ak", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10", "aj", "aq", "ak"]

let counter = 0

let tiro = 1
let tirada = 1

/* parte jugador!!! */

let counter2 = 0;

let win = false;

function nuevaCarta(){
    if(tiro === 1){
        let random = Math.floor(Math.random() * 52 )
        if(random === 0 || random === 13 || random === 26 || random === 39){
            counter2 = 10
        }
        counter2 = counter2 + cartas[random]
        console.log(cartas[random])
        console.log(random)
        h2.textContent = counter2
        console.log(`url(img/${img_naipes[random]}.jpg)`)
        carta1.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
        carta1.setAttribute("class", "aparecer")

        let random2 = Math.floor(Math.random() * 52 )
        if((random2 === 0  || random2 === 13 || random2 === 26 || random2 === 39)  && random !== 0){
            counter2 = counter2 + 10
        }
        counter2 = counter2 + cartas[random2]
        console.log(cartas[random2])
        console.log(random2)
        h2.textContent = counter2
        console.log(`url(img/${img_naipes[random2]}.jpg)`)
        carta2.style.backgroundImage = `url(img/${img_naipes[random2]}.jpg)`
        carta2.setAttribute("class", "aparecer")
       
        tiro++
        tiro++
    }else if(tiro === 3){
        let random = Math.floor(Math.random() * 52 )
        counter2 = counter2 + cartas[random]
        console.log(cartas[random])
        h2.textContent = counter2
        carta3.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
        carta3.setAttribute("class", "aparecer")
        if(counter2 > 21){
            console.log("Perdiste looser!!!")
            setTimeout(() => {
                nuevoJuego()
            }, 500);
            tiro = 0
        }
        tiro++
    }else if(tiro === 4){
        let random = Math.floor(Math.random() * 52 )
        counter2 = counter2 + cartas[random]
        console.log(cartas[random])
        h2.textContent = counter2
        carta4.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
        carta4.setAttribute("class", "aparecer")
        if(counter2 > 21){
            console.log("Perdiste looser!!!")
            setTimeout(() => {
                nuevoJuego()
            }, 500);
            tiro = 0
        }
        tiro++
    }else if(tiro === 5){
        let random = Math.floor(Math.random() * 52 )
        counter2 = counter2 + cartas[random]
        console.log(cartas[random])
        h2.textContent = counter2
        carta5.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
        carta5.setAttribute("class", "aparecer")
        if(counter2 > 21){
            console.log("Perdiste looser!!!")
            setTimeout(() => {
                nuevoJuego()
            }, 500);
            tiro = 0
        }
        tiro++
    }else if(tiro === 6){
        let random = Math.floor(Math.random() * 52 )
        counter2 = counter2 + cartas[random]
        console.log(cartas[random])
        h2.textContent = counter2
        carta6.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
        carta6.setAttribute("class", "aparecer")
        if(counter2 > 21){
            console.log("Perdiste looser!!!")
            setTimeout(() => {
                nuevoJuego()
            }, 500);
            tiro = 0
        }
        tiro++
    }

   
}

function plantarse(){
    
    console.log("---------------------")
    

            for(let i = 0; i < 10; i++){
            
                let random = Math.floor(Math.random() * 52 )
                let random2 = Math.floor(Math.random() * 52 )

                if(tirada === 1){
                    counter = counter + cartas[random]
                    counter = counter + cartas[random2]
                    console.log(cartas[random])
                    console.log(cartas[random2])
                    carta7.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
                    
                    carta8.style.backgroundImage = `url(img/${img_naipes[random2]}.jpg)`                   
         
                     h2_casa.textContent = `La casa: ${counter}`
                    if((counter > counter2 && counter <= 21) || counter > 21){
                     break;
                    }
                    tirada ++

                }else if(tirada === 2){
                  
                    
                    counter = counter + cartas[random]
                    console.log(cartas[random])
                    carta9.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
                    
                    h2_casa.textContent = `La casa: ${counter}`
                    if((counter > counter2 && counter <= 21) || counter > 21){
                     break;
                    }
                    tirada ++
                }else if(tirada === 3){
                    counter = counter + cartas[random]
                    console.log(cartas[random])
                    carta10.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
                    
                    h2_casa.textContent = `La casa: ${counter}`
                    if((counter > counter2 && counter <= 21) || counter > 21){
                     break;
                    }
                    tirada ++
                }else if(tirada === 4){
                    counter = counter + cartas[random]
                    console.log(cartas[random])
                    carta11.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
                    
                    h2_casa.textContent = `La casa: ${counter}`
                    if((counter > counter2 && counter <= 21) || counter > 21){
                     break;
                    }
                    tirada ++
                }else if(tirada === 5){
                    counter = counter + cartas[random]
                    console.log(cartas[random])
                    carta12.style.backgroundImage = `url(img/${img_naipes[random]}.jpg)`
                    
                    h2_casa.textContent = `La casa: ${counter}`
                    if((counter > counter2 && counter <= 21) || counter > 21){
                     break;
                    }
                    tirada ++
                }

            
            }
    
        console.log("Total: " + counter)
    
        if(counter2 > counter && counter2 <= 21){
            console.log("Has ganado la partida!!!")
            win = true
            nuevoJuego()
        }else if(counter2 <= 21 && counter > 21){
            console.log("Has ganado la partida!!!")
            win = true
            nuevoJuego()
        }else{
            console.log("Looser!!!")
            nuevoJuego()
        }
   
}

function nuevoJuego(){
   
    setTimeout(() => {
        if(win == true){
            modal_container.setAttribute("class", "modal_container2")
            
        }else{
            modal_container3.setAttribute("class", "modal_container3")
        }
        
    }, 1500);

    
    
}

function aceptar(){

        modal_container.setAttribute("class", "modal_container")
        modal_container3.setAttribute("class", "modal_container")
        counter = 0
        tiro = 1
        counter2 = 0;
        h2.textContent = counter2
        h2_casa.textContent = `La casa: ${counter}`

        carta1.style.backgroundImage = "url(naipe.jpg)"
        carta2.style.backgroundImage = "url(naipe.jpg)"
        carta3.style.backgroundImage = "url(naipe.jpg)"
        carta4.style.backgroundImage = "url(naipe.jpg)"
        carta5.style.backgroundImage = "url(naipe.jpg)"
        carta6.style.backgroundImage = "url(naipe.jpg)"

        carta7.style.backgroundImage = "url(naipe.jpg)"
        carta8.style.backgroundImage = "url(naipe.jpg)"
        carta9.style.backgroundImage = "url(naipe.jpg)"
        carta10.style.backgroundImage = "url(naipe.jpg)"
        carta11.style.backgroundImage = "url(naipe.jpg)"
        carta12.style.backgroundImage = "url(naipe.jpg)"

        win = false

        
}

function cancelar(){
    modal_container.setAttribute("class", "modal_container")
    
}



    
     
   




    