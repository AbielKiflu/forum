import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register ({isLoggedIn,setIsLoggedIn}){
	const navigate=useNavigate();
	const [nickname, setNickname] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');
	const [signature, setSignature] = React.useState('');
	axios.defaults.withCredentials = true;
	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method:'post',
			url:'http://localhost:8000/api/register',  
			params:{
				'nickname':nickname,
				'email':email,
				'password':password,
				'signature':signature
			}          
		})
		.then(response => {
			setIsLoggedIn(true);
			navigate("/boards");
		})
		.catch(function(error){
			console.log("error: " + error);
		});
	}
	return (
		<section className="h-screen">
		<div className="px-6 h-full text-gray-800">
		<div
			className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
		>
			<div
				className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
			>
				<img
					src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
					className="w-full"
					alt="Sample"
				/>
			</div>
			<div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
				<form onSubmit={handleSubmit}>
					<div className="mb-6">
						<input
								type="text"
								className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleFormControlInput2"
								name="nickname"
								placeholder="Nickname"
								value={nickname}
								onChange={e => setNickname(e.target.value)}
								required
						/>
					</div>
					<div className="mb-6">
						<input
								type="email"
								className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleFormControlInput2"
								name="email"
								placeholder="Email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								required
						/>
					</div>

					<div className="mb-6">
						<input
								type="password"
								name="password"
								placeholder="Password"            
								className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleFormControlInput2"
								value={password}
								onChange={e => setPassword(e.target.value)}
								required
						/>
					</div>
					<div className="mb-6">
						<input
								type="text"
								className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
								id="exampleFormControlInput2"
								name="signature"
								placeholder="Signature"
								value={signature}
								onChange={e => setSignature(e.target.value)}
								required
						/>
					</div>
					<div className="text-center lg:text-left">
						<button
							type="submit"
							className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
						>
							Register
						</button>
						<p className="text-sm font-semibold mt-2 pt-1 mb-0">
							Already have an account?
								<a
										href="/login"
										className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
								> 
								&nbsp;Login
								</a>
						</p>
					</div>
				</form>
			</div>
		</div>
		</div>
		</section>
		);
}

export default Register;
