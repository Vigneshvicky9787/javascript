const punch = document.querySelector('#punch')

console.log(punch)

const scissor = document.querySelector('#scissor')
const paper = document.querySelector('#paper')


punch.addEventListener('click',()=>{
    console.log('you clicked punch')
})

scissor.addEventListener('click',()=>{
    console.log('you clicked scissor')
})

paper.addEventListener('click',()=>{
    console.log('you clicked paper')
})

// ---------------------------------------------------------

function add (a=10, b=0){
    return  a+b
}
// const result = add(23,7)
console.log(add(39,1))
