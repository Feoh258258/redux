import {createStore} from './createStore'
import './styles.css'
import {rootReducer} from './redux/rootReducer'

const myCount = document.getElementById('counter')
const myAddBtn = document.getElementById('add')
const myBtn = document.getElementById('sub')
const myAsyncBtn = document.getElementById('async')
const myThemeBtn = document.getElementById('theme')

const store = createStore(rootReducer, 0)


myAddBtn.addEventListener('click', () => {
  store.dispatch( { type: 'INCREMENT' } )
})

myBtn.addEventListener('click', () => {
  store.dispatch( { type: 'DECREMENT' } )
})

myAsyncBtn.addEventListener('click', () => {

})

store.subscribe( () => {
  const state = store.getState()

  counter.textContent = state
})


store.dispatch( {type: 'INIT_APPLICATION'})

myThemeBtn.addEventListener('click', ()=>{
  //document.body.classList.toggle('dark')
})




render()