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
        })
        .then(response => {
            setBoards(response.data)
        })
        .catch(error => console.error(error));
    }, []);
    return (
        <div>
            <BoardsList boards={boards}/>
            <BacktoTop/>
        </div>

    );
}
export default Boards;