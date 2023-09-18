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


        
        <ItemBox header={'Request Virtual Machine'} data={`
        <ul>
        <li>Windows 2019 Datacenter</li>
        <li>CentOS 8</li>
        <li>Ubuntu 12</li>
        <li>Request Up to 30VMs</li>
        <li>Vcenter Location </li>
      </ul> 
        `}></ItemBox>
        <ItemBox header={'Request Database'} data={
           `
           <ul>
           <li>Oracle database 12c</li>
           <li>Yannawa / Ratburana</li>
           <li>User / Password</li>
           <br />
           <br />
         </ul> 
           `
        }></ItemBox>
      
      </div>
      </div>
    </>
  )
}

export default App
