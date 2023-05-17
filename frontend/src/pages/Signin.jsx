import { useState } from "react";
import { base_url } from "../utils/base_url";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${base_url}user/login`, { email, password });
            const data = response.data;
            localStorage.setItem('userData', JSON.stringify(data));
            alert("Sign in successfull"); 
            navigate("/home")

        } catch (err) {
            if (err.response && err.response.status === 401) {
                alert('Incorrect credentials')
            } else {
                alert('Something went wrong. Please try again later')
            }
        }
    }
  return (
    <div className="text-center">
    <main className="form-signin w-100 m-auto">
        <form className="mt-4 p-4" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>
            <div className="row g-3">
                <div className="col-md-12">
            <div className="form-floating">
                <input type="email" className="form-control" id="floatingInput" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="name@example.com" required />
                <label for="floatingInput">Email Address</label>
            </div>
            </div>
            <div className="col-md-12">
            <div className="form-floating">
                <input type="password" className="form-control" name="password" value={password} onChange={(event) => setPassword(event.target.value)} id="floatingPassword" placeholder="Password" required />
                <label for="floatingPassword">Password</label>
            </div>
            </div>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
        </main>
    </div>
  )
}

export default Signin