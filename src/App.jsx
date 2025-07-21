
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  // local data load
  // const watches = [
  //   { id: 1, name: "Amazfit Bip U Pro", price: 4999 },
  //   { id: 2, name: "Samsung Galaxy Watch 6", price: 18999 },
  //   { id: 3, name: "Apple Watch SE (2nd Gen)", price: 28999 },
  //   { id: 4, name: "Noise ColorFit Ultra 3", price: 3499 },
  //   { id: 5, name: "boAt Xtend Pro", price: 2999 }
  // ]



  // Json format data use with fetch from public watches.json file

  // state for hold data
  const [watches, setWatches] = useState([]);

  // load data from watches.json file
  useEffect(() => {
    fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data))
  },[])


  return (
    <>
     
      <h2>Watches: {watches.length} </h2>
      {
        watches.map(watch=> <Watch watch={watch}></Watch>)
      }
      
      
    </>
  )
}

export default App
