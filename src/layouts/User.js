import React from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true
const User = () => {
    const [user, setUser] = React.useState([]);
    React.useEffect(() => {
        axios({
            method:'get',
            url:'http://localhost:8000/api/user',
            // headers:{
            //     'Access-Control-Allow-Origin': '*', 
            //     withCredentials:true,
            //     'Content-Type': 'application/json',
            // }
        })
        .then(response => {
          setUser(response.data)
        })
        .catch(error => console.error(error));    


    }, []);
    return (
      JSON.stringify(user)
    );
}
export default User;