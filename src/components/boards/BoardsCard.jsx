import React from "react";
import axios from "axios";
import BacktoTop from "../button/BacktoTop"
const BoardsCard = ({board})=>{
  const [forums, setForums] = React.useState([]);
  React.useEffect(() => {
    console.log(board);
    // axios({
    //     method:'get',
    //     url:'http://localhost:8000/api/board/'+board.board_id+"/forums",
    //     // headers:{
    //     //     'Access-Control-Allow-Origin': '*', 
    //     //     withCredentials:true,
    //     //     'Content-Type': 'application/json',
    //     // }
    // })
    // .then(response => {
    //     setForums(response.data);
    //     console.log(forums);
    // })
    // .catch(error => console.error(error));
}, []);
}
export default BoardsCard;