import React from 'react';
import axios from 'axios';
const Login = (props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    axios.defaults.withCredentials = true
    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method:'get',
            url:'http://localhost:8001/sanctum/csrf-cookie',            
            headers:{
                'Access-Control-Allow-Origin': '*', 
                withCredentials:true,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            axios({
                method:'post',
                url:'http://localhost:8001/api/login',
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
                console.log(response.data);
                                axios({
                    method:'get',
                    url:'http://localhost:8001/api/user',
                    headers:{
                        'Access-Control-Allow-Origin': '*', 
                        withCredentials:true,
                        'Content-Type': 'application/json'
                    }
                })
                .then(function(response){
                    console.log(response.data);
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