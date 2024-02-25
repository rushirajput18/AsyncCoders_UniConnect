import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './css/dropdown.css'
export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [redirect, setRedirect] = useState(false);

    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password, role: selectedRole }), // Include selected role in the request body
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
            setRedirect(true);
            alert('Registration successful');
        } else {
            console.log(response.body)
            alert('Registration failed');
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />;
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <div style={{marginBottom:'5px'}}>
                <label htmlFor="role">Select Role:</label>
                <select id="role" value={selectedRole} onChange={ev => setSelectedRole(ev.target.value)}>
                    <option value="">Select...</option>
                    <option value="Admin">Admin</option>
                    <option value="Authority">Authority</option>
                    <option value="Head">Head</option>
                    <option value="Student">Student</option>
                </select>
            </div>
            <button>Register</button>
        </form>
    );
}
