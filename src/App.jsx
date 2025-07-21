
import './App.css'
import Watch from './components/Watch/Watch'

function App() {
  // local data load
  const watches = [
    { id: 1, name: 'Apple Watch', price: '49040', },
    { id: 2, name: 'Samsung Watch', price: '29005', },
    { id: 3, name: 'Oppo Watch', price: '9040', },
    { id: 4, name: 'Nokia Watch', price: '4050', },
    { id: 5, name: 'Haw Watch', price: '3050', },
  ]

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
