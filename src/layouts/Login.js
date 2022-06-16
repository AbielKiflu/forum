import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = ({isLoggedIn,setIsLoggedIn}) => {
    const navigate=useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method:'get',
            url:'http://localhost:8000/sanctum/csrf-cookie',            
            headers:{
                'Access-Control-Allow-Origin': '*', 
                withCredentials:true,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            axios({
                method:'post',
                url:'http://localhost:8000/api/login',
                params:{
                    'email':email,
                    'password':password
                },
                
                headers:{
                    'Access-Control-Allow-Origin': '*', 
                    withCredentials:true,
                    'Content-Type': 'application/json',
                }
            })
            .then(function(response){
                axios({
                    method:'get',
                    url:'http://localhost:8000/api/user',
                    headers:{
                        'Access-Control-Allow-Origin': '*', 
                        withCredentials:true,
                        'Content-Type': 'application/json'
                    }
                })
                .then(function(response){
                    navigate('/boards');
                })
                .catch(function(err){
                    
                    console.log("error:" + err);
                })
            })
            .catch(function(error){
                console.log("error: " + error);
            })
        });
       
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;