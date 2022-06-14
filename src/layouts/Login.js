import React,{useState,useEffect } from 'react';
import "./login.scss";
import axios from "axios";
import {Button} from "../components/button/Button"

//import {styled}  from 'styled-components';

function Login (){
	const [message,setMessage] =useState('');
	const [user, setUser]=useState({
		"email":"",
		"password":""
	});
	 
	axios.defaults.withCredentials=true;
	axios.defaults.baseURL='http://127.0.0.1:8001';

	function login(credentials){
		const data = {
			method: 'POST',
			mode: 'cors',
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json, text-plain, */*",
				"X-Requested-With": "XMLHttpRequest",
				"X-CSRF-TOKEN": "dssrgergerg"
			},
			body:user
		};


		axios.get('/sanctum/csrf-cookie').then(response => {
			console.log(response);
		});

		fetch("http://127.0.0.1:8001/api/login",data)
		.then(response => response.json())
		.then((response) =>{
		console.log(response);
			 
		})

	
	}

	function hundler(e){
		e.preventDefault();
		const credentials={
			"email":"",
			"password":""
		}
		login(credentials);
	}
 
	function handlerOnChange(e){
			setUser({...user,[e.target.name]:e.target.value,[e.target.name]:e.target.value});
			}

	return (
		<>
	 		<div className="wrapper">
			 	<form onSubmit={hundler}>
				 <h3>Login</h3>
				 <input type="text" name="email" placeholder="Email" onChange={handlerOnChange}/>
				 <input type="password" name="password" placeholder="Password"  onChange={handlerOnChange}/>
				 <Button>Login</Button>
				 </form>
			</div>
			  
		</>
	)
}

export default Login;
