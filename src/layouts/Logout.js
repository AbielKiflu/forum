import React from 'react';
import axios from 'axios';
const Logout = ({isLoggedIn,setIsLoggedIn}) => {
const [user, setUser] = React.useState([]);

  React.useEffect(() => {
      axios({
          method:'get',
          url:'http://localhost:8000/api/logout',
          // headers:{
          //     'Access-Control-Allow-Origin': '*', 
          //     withCredentials:true,
          //     'Content-Type': 'application/json',
          // }
      })
      .then(response => {
        setUser(response.data);
        setIsLoggedIn(false);
      })
      .catch(error => console.error(error));    


  }, [setIsLoggedIn]);
  return (
    <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
      <span className="font-medium"> {user.message}</span> 
    </div>

  );
}
export default Logout;
