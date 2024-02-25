import React, { useState } from "react";
import registrationImage from "./Images/vjti.jpg"; // Import your image file
import './css/register.css'
export default function RegistrationForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted email:", email);
    setEmail("");
    setName("");

    // Update registration success state
    setRegistrationSuccess(true);
  };

  return (
    <div className="container mt-5">
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <h3>Register for Event</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)}/>
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="registration-image-container">
        <img src={registrationImage} alt="Registration" style={{width:'300px'}}/>
      </div>
      <button type="submit" style={{ width: '150px', backgroundColor: '#4CAF50', color: 'white', textAlign: 'center', padding: '14px 20px', margin: '8px 0', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Submit</button>
        </form>
        {registrationSuccess && <p>Registration successful! Confirmation email sent.</p>}
      </div>
    
    </div>
  );
}
