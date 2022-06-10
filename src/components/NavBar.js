import React from 'react'

const NavBar = () => {
  return (
    <div className='navWrapper'>
        <h1 className='logo'>Patexia</h1>
        <ul className='navlist'>
            <li>Insight</li>
            <li>IP Jobs</li>
            <li>Expert</li>
            <li>Community</li>
            <li>About</li>
            <li>Search</li>
        </ul>
        <h1 className='login'>LOGIN</h1>
        <button className='join'>JOIN</button>

    </div>
  )
}

export default NavBar;