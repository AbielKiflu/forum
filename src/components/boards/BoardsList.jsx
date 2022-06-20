import axios from "axios";
import React from "react";
import BoardsCard from "./BoardsCard"
const BoardsList = ({boards})=>{
  const [forums, setForums] = React.useState([]);
  function toggleBoard(board_id){   
    axios({
        method:'get',
        url:'http://localhost:8000/api/board/'+board_id+"/forums",
    })
    .then(response => {
        setForums(response.data);
    })
    .catch(error => console.error(error));
  };     
  let forumList = forums.map(forum =>
    <>
      <li>
        <h2>{forum.title}</h2>
        <p>{forum.description}</p>
      </li>
    </>

  );
  let boardsList=boards.map((board) =>
    <li key={board.board_id}>
      <button onClick={()=>toggleBoard(board.board_id)}>{board.description}</button>
    </li>
  );  
  return(
    <> 
    <ul>{boardsList}</ul>
    <h2>Forums</h2>
    <ul>{forumList}</ul>
    </>
   
  );
}
export default BoardsList;