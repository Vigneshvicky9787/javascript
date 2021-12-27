const punch = document.querySelector('#punch')
const scissor = document.querySelector('#scissor')
const paper = document.querySelector('#paper')
const board = document.querySelector('#board')


const handler = (event) => {
    const action = event.target.id

    // if(action === 'punch'){
    //      console.log('you clicked punch')
    // }
    // else if(action === 'scissor'){
    //     console.log('you clicked scissor')
    // }
    // else if(action === 'paper'){
    //     console.log('you clicked paper')
    // }
    // else{
    //     console.log('click something')
    // }

    switch(action){
       case 'punch':
           board.innerHTML ='you clicked punch'
           break;
       case 'scissor':
           board.innerHTML ='you clicked scissor'
           break;
       case 'paper':
           board.innerHTML ='you clicked paper'
           break;
       default:
           board.innerHTML = 'click somthing' 
           break;  
    }
}


punch.addEventListener('click', handler)
scissor.addEventListener('click', handler)
paper.addEventListener('click', handler)