import axios from "axios";
import React from "react";
import BoardsCard from "./BoardsCard"
const BoardsList = ({boards})=>{
  const [board, setBoard] = React.useState([]); 
  React.useEffect(() => {
    console.log(board);
  }, [board]);
  function toggleBoard(board_id){   
    axios({
        method:'get',
        url:'http://localhost:8000/api/boards/'+board_id,
        // headers:{
        //     'Access-Control-Allow-Origin': '*', 
        //     withCredentials:true,
        //     'Content-Type': 'application/json',
        // }
    })
    .then(response => {
      setBoard(response.data);
      return(
        <BoardsCard board={board}/>
      );
    })
    .catch(error => console.error(error));
  };
  let boardsList=boards.map((boardp) =>
    <li key={boardp.board_id}>
      <button onClick={()=>toggleBoard(boardp.board_id)}>{boardp.description}</button>
    </li>
    
  );  
  return(
    <ul>{boardsList}</ul>
  );

}
export default BoardsList;