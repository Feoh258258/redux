import './styles.css'

const myCount = document.getElementById('counter')
const myAddBtn = document.getElementById('add')
const myBtn = document.getElementById('sub')
const myAsyncBtn = document.getElementById('async')
const myThemeBtn = document.getElementById('theme')

let state = 0

function render() {
  counter.textContent = state.toString()
}


myAddBtn.addEventListener('click', () => {
  state++
  render()
})

myBtn.addEventListener('click', () => {
  state--
  render()
})

myAsyncBtn.addEventListener('click', () => {
  setTimeout( () => {
    state++
    render()
  }, 2000)
})

myThemeBtn.addEventListener('click', ()=>{
  document.body.classList.toggle('dark')
})


render()