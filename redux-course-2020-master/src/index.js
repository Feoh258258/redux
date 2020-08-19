import './styles.css'

const myCount = document.getElementById('counter')
const myAddBtn = document.getElementById('add')
const myBtn = document.getElementById('sub')

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


render()