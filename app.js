// const element = document.getElementById('selectme')
 
//  element.classList.add('five')

//  console.log(element.classList)
//  element.classList.remove('one')
//  const values = element.classList.contains('five')

// console.log(values)

// element.innerHTML = 'This is js'

// element.style.color = 'blue';
// element.style.background = 'skyblue';
// element.style.fontSize = '24px';

// element.style = 'display: none'
// // const print = document.getElementsByClassName('heading')

const print = document.getElementsByTagName('h2')

console.log(print)

const seletor = document.querySelector('h4.heading')

console.log(seletor)
//----------------------------------------------------------

const button = document.querySelector('button')

const dark = document.querySelector('body')

dark.addEventListener('click' , ()=>{
  dark.classList.toggle('aqua')
})

