import React, {useState} from 'react'
import Sqaure from './Sqaure';

const Boarder = () => {
  const [state, setstate] = useState(Array(9).fill(null));
  // console.log("state", state);
  const [isXTurn, setisXTurn] = useState(true);
  const checkWinner = () =>{
    const winnerLogic = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let logic of winnerLogic){
      const [a, b, c] = logic;
      if(state[a] !== null && state[a] === state[b] && state[a] === state[c]){
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();
  const handleClick = (index) => {
    if(state[index] !== null){
      return;
    }
      // console.log("clicked on index", index);
      const copystate = [...state];
      copystate[index] = isXTurn ? "X" : "0";
      setstate(copystate);
      setisXTurn(!isXTurn);
  };

  const handleReset = () =>{
    setstate(Array(9).fill(null));
  };

  return (

    <div className='board-container'>
    { isWinner ? (
      <>HariBol {isWinner} Won the game <button onClick = {handleReset}> Play Again</button></>
    ) : (
        <>
        <h4>Player {isXTurn ? "X" : "0" } please move </h4>
        <div className="board-row">
          <Sqaure onClick={()=> handleClick(0)} value = {state[0]}/>
          <Sqaure onClick={()=> handleClick(1)} value = {state[1]} />
          <Sqaure onClick={()=> handleClick(2)} value = {state[2]}/>
        </div>
        <div className="board-row">
          <Sqaure onClick={()=> handleClick(3)} value = {state[3]}/>
          <Sqaure onClick={()=> handleClick(4)} value = {state[4]}/>
          <Sqaure onClick={()=> handleClick(5)} value = {state[5]}/>
        </div>
        <div className="board-row">
          <Sqaure onClick={()=> handleClick(6)} value = {state[6]}/>
          <Sqaure onClick={()=> handleClick(7)} value = {state[7]}/>
          <Sqaure onClick={()=> handleClick(8)} value = {state[8]}/>
        </div>
        </>
        )}
    </div>
  )
}

export default Boarder;