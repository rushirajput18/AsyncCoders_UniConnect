import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
// import vdo from './Images/Reelvideo-23342.mp4';
import backgroundImage from '../components/Images/prati.jpg';
// import Footer from './Footer';

const Home = () => {
  const navigate = useNavigate();

  

  const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '95vh',
    overflow: 'hidden',
    background: `url(${backgroundImage}) center/cover`, // Set the background image
    filter: 'brightness(85%)', // Add a darken effect
  };

  const overlayStyle = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    width: '25%',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  };

  const linkStyle = {
    display: 'block',
    textDecoration: 'none',
    color: 'white',
    marginBottom: '10px', // Gap between list items
    borderTop: '1px solid teal', // Teal border added here
    paddingTop: '10px',
    // Added hover style
    ':hover': {
      backgroundColor: '#7d2ae8',
    },
  };

  const headingStyle = {
    fontSize: '2em',
    marginBottom: '10px',
  };

  const columnsStyle = {
    display: 'block',
    paddingTop: '10px',
    marginTop: '10px',
    color: 'white',
  };

  const handleScrollToAbout = () => {
    // Assuming "aboutSection" is the ID of the element in About.js
    scroll.scrollToBottom();
  };

  // const handleNavigateToAdmission = () => {
  //   // Navigate to the "/admission" route
  //   navigate('/admission');
  // };

  const handleNavigateToMap = () => {
    // Navigate to the "/map" route
    navigate('/map');
  };
  const handleNavigateToAdmission = () => {
    // Navigate to the "/map" route
    navigate('/admission');
  };

  return (
    <>
    
      <div style={containerStyle}>
        {/* <video src={vdo} autoPlay muted loop playsInline style={videoStyle} /> */}
        <div style={overlayStyle}>
          <div style={headingStyle}>UniConnect</div>
          <div style={columnsStyle}>

            <Link style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7d2ae8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
              }} className="nav-link" onClick={handleNavigateToAdmission}>
              Committees
            </Link>


            {/* <button
              className="nav-link"
              onClick={handleNavigateToAdmission}
              style={linkStyle}
            >
              Admissions
            </button> */}
            <Link
              className="nav-link"
              onClick={handleNavigateToMap}
              style={linkStyle}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7d2ae8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
              }}
            >
              Events
            </Link>
            {/* Use react-scroll to smoothly scroll to the "About Us" section */}
            <Link
              className="nav-link"
              to="aboutSection"
              style={linkStyle}
              onClick={handleScrollToAbout}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#7d2ae8';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '';
              }}
            >
              About
            </Link>
          </div>
        </div>
      </div>
      {/* <About />
      <Footer/> */}
    </>
  );
};

export default Home;