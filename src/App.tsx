import './App.css'
import CardList from './components/CardList'
import img from './assets/test.jpg'

const cardList = [
  {title : "Some quick example text to build on the card title and make up the bulk of the card's content." , image : img},
  {title : "With supporting text below as a natural lead-in to additional content."}
]

function App() {
  return (
    <CardList list = {cardList}
      />
  )
}

export default App
