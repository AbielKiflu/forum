import React from 'react';
import axios from 'axios';
import BacktoTop from '../components/button/BacktoTop';
import BoardsList from '../components/boards/BoardsList';
const Boards = () => {
    const [boards, setBoards] = React.useState([]);
    React.useEffect(() => {
        axios({
            method:'get',
            url:'http://localhost:8000/api/boards',
            // headers:{
            //     'Access-Control-Allow-Origin': '*', 
            //     withCredentials:true,
            //     'Content-Type': 'application/json',
            // }
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
    // const boardsList = boards.map((board) =>
    //     <li key={board.board_id}>
    //         {board.description}
    //     </li>
    // );
    // console.log(boardsList);
    return (
        <div>
            <BoardsList boards={boards}/>
            <BacktoTop/>
        </div>

    );
}
export default Boards;