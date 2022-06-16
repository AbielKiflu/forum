import React from 'react';
import axios from 'axios';
const Boards = () => {
    const [boards, setBoards] = React.useState([]);
    //const [board,setBoard] = React.useState([]);
    React.useEffect(() => {
        axios({
            method:'get',
            url:'http://localhost:8000/api/boards',
            headers:{
                'Access-Control-Allow-Origin': '*', 
                withCredentials:true,
                'Content-Type': 'application/json',
            }
        })
        .then(response => {
            setBoards(response.data)
        })
        .catch(error => console.error(error));    


    }, []);
    // function toggleBoard(board_id){
    //     axios({
    //         method:'get',
    //         url:'http://localhost:8000/api/boards/'+board_id,
    //         headers:{
    //             'Access-Control-Allow-Origin': '*', 
    //             withCredentials:true,
    //             'Content-Type': 'application/json',
    //         }
    //     })
    //     .then(response => {
    //       setBoard(response.data)
    //     })
    //     .catch(error => console.error(error));
    // };
    const boardsList = boards.map((board) =>
        <li key={board.board_id}>
            {board.description}
        </li>
    );
    return (
        <ul>{boardsList}</ul>
    );
}
export default Boards;