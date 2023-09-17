import { useState } from 'react'
import './App.css'
import YourComponent from './YourComponent'
import ItemBox from './ItemBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card-container'>
        
        <ItemBox header={''} data={''}></ItemBox>
        <ItemBox header={''} data={''}></ItemBox>
      
      </div>
    </>
  )
}

export default App
