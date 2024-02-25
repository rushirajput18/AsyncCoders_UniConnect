import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './css/dropdown.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

    async function login(ev) {
        ev.preventDefault();
    
        if (!selectedRole) {
            alert('Please select a role.');
            return;
        }
    
        const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password, role: selectedRole }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
    
        if (response.ok) {
            const userInfo = await response.json();

            // Set user as logged in
            localStorage.setItem('token', userInfo.token);
            localStorage.setItem('role', userInfo.role);

            // Update the isLoggedIn state
            setIsLoggedIn(true);

            // Reload the page
            window.location.href = '/';

            // Redirect to committees page
            setRedirect(true);
        } else {
            alert('Wrong credentials');
        }
        
    }
    if (redirect && isLoggedIn ) {
        return <Navigate to={'/'} />;
    }


    return (
        <form className="login" onSubmit={login} style={{marginBottom:'315px'}}>
            <h1>Login</h1>
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
            <button type="submit">Login</button>
        </form>
    );
}