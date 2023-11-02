import React, { useContext } from 'react'
import '../style.css'
import { KeyboardArrowDown } from '@mui/icons-material'
import DisplayBox from './DisplayBox'
import { MyContext } from '../MyContext'

const Navbar = () => {
  const {ticketData , userData , showDisplayBox , setShowDisplayBox} = useContext(MyContext);
  console.log(ticketData);
  console.log(userData);
  return (
    <div className='navbar'>
      <button onClick={() => {setShowDisplayBox(!showDisplayBox)}} className='navbar-button'>
        <span>Display</span>
        <KeyboardArrowDown />
      </button>
      {showDisplayBox && <DisplayBox />}
    </div>
  )
}

export default Navbar
