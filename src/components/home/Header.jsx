import React from 'react'
import { PiChefHat } from "react-icons/pi";
import { GiForkKnifeSpoon } from "react-icons/gi";

const Header = () => {
  return (
    <header className='py-5' style={{backgroundColor: '#4169E1'}}>
        <div className='container px-4 px-lg-5 my-5'>
            <div className='text-center text-white'>
            <h1 className='display-4  fw-bold'> Maes Dining<PiChefHat /></h1>

            <p className='lead text-white'>Discover the best dining experiences in town.</p>
            <a href='#order' className='btn btn-light btn-lg rounded-pill px-4 py-2'>Dine With Mae <GiForkKnifeSpoon /></a>
        </div>
        </div>
    </header>
  )
}

export default Header
