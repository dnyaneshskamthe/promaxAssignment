import React from 'react'
const mystyle={
  color:'darkBlue',
  fontSize:'4rem'
}
const Header = () => {
  return (
    <div className='headerWrapper'>
        <h1><span style={mystyle}>Patexia</span> Contest</h1>
    </div>
  )
}

export default Header