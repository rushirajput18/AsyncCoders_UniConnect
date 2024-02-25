import React from "react";
import { formatISO9075 } from "date-fns";
import { Link, useHistory, useNavigate } from "react-router-dom"; // Import useHistory hook
import '../src/components/css/posts.css'
export default function Post(props) {
  const userRole = localStorage.getItem("role");
  const navigate = useNavigate(); // Initialize useHistory hook
  const handleRegisterClick = () => {
    navigate(`/registerevent`); // Navigate to registration page with event title
  };
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${props.event._id}`}>
          <img src={'http://localhost:4000/' + props.event.cover} alt="" />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${props.event._id}`}>
          <h2>{props.event.title}</h2>
        </Link>
       
        <p className="summary">{props.event.summary}</p>

        {/* Display venue, date, and time if available */}
        {props.event.venue && (
          <h4>Venue: {props.event.venue}</h4>
        )}
        {props.event.date && (
          <>
            <p>Date: {formatISO9075(new Date(props.event.date), 'MMM d, yyyy')}</p>
          </>
        )}
        {props.event.time && (
          <>
            <br/>
            <h6><b>Time: {props.event.time}</b> </h6>
          </>
        )}

        {/* Register Button */}
        {(userRole === "Student" || userRole === "Admin") && (
        <button className="register-button" style={{ width: '120px' }} onClick={handleRegisterClick}>Register</button>
        )}
      </div>
       
      
    </div>
  );
}
