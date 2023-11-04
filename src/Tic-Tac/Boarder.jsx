import React from 'react'
import Sqaure from './Sqaure';

const Boarder = () => {
  return (
    <div className='board-container'>
        <div className="board-row">
          <Sqaure />
          <Sqaure />
          <Sqaure />
        </div>
        <div className="board-row">
          <Sqaure />
          <Sqaure />
          <Sqaure />
        </div>
        <div className="board-row">
          <Sqaure />
          <Sqaure />
          <Sqaure />
        </div>
        
    </div>
  )
}

export default Boarder;