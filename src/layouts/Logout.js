import React from 'react';
import axios from 'axios';
const Logout = (props) => {
  const [user, setUser] = React.useState([]);
  React.useEffect(() => {
      axios({
          method:'get',
          url:'http://localhost:8000/api/logout',
          headers:{
              'Access-Control-Allow-Origin': '*', 
              withCredentials:true,
              'Content-Type': 'application/json',
          }
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
export default Logout;