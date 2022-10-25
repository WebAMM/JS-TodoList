import React from 'react'

function Footer( ) {
    let customStyle = {
        position: "relative",
        width: "100%",
        top: "50vh",
    }
  return (
    <div className='bg-dark text-light py-3' style={customStyle}>
        <p className='text-center'>
            Copyright &copy; siNex-list.com
        </p>
    </div>
  )
}

export default Footer

