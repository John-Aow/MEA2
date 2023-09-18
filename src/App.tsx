import { useState } from 'react'
import './App.css'
import ItemBox from './ItemBox'

function App() {

  return (
    <>
    <div className='page'>
      <div className='searchbox-container'>
        <input className='search-input' type='text' id='search-word' placeholder='Search...'/>
      </div>
      <div className='card-container'>


        
        <ItemBox header={''} data={''}></ItemBox>
        <ItemBox header={''} data={''}></ItemBox>
      
      </div>
      </div>
    </>
  )
}

export default App
