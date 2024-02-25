import React, { useState, useEffect } from 'react';
import './css/Comittees.css';
import Cards from './Cards';
import './css/Button.css';
import techno from './Images/techno.jpg'
import rang from './Images/Rangwardhan.png'
import prati from './Images/pratibimb.jpg'
import enthu from './Images/enthu.jpg'
import digital from './Images/digital.png'
import ecell from './Images/ecell.jpg'
import dla from './Images/dla.png'
import cesa from './Images/cesa.png'
const arr = [
  {
    name: "Rangwardhan",
    head: "Aniruddha Tathe",
    img: rang,
    info: "रंगवर्धन: मराठी सांस्कृतिक रंगमंच, व्हीजेटीआय, मुंबई !🚩मराठी राजभाषेस अबाधित ठेवणे हेच आपले ध्येय !!"
  },
  {
    name: "Technovanza",
    img: techno,
    head: "Omkumar Dhanorkar",
    info: "Technovanza, One of Asia's Largest Techno-Manegerial Festival"
  },
  {
    name: "Pratibimb",
    img: prati,
    head: "Ashok Shekade",
    info: "The cultural extravaganza of VJTI, Mumbai"
  },
  {
    name: "Enthusia",
    img: enthu,
    head: "Mahesh Thakare",
    info: "A national-level sports festival of VJTI, Mumbai"
  },
  {
    name: "DLA",
    img: dla,
    head: "Prathamesh Kothawade",
    info: "DLA stands for Debate and Literary Activities Club of VJTI." 
  },
  {
    name: "CESA",
    img: cesa,
    head: "Shashank Dhurwey",
    info: "Civil Engineering Student's Association - One place for you to meet engineers and explore the depths of Civil Engineering through activities and lessons"
  },
  {
    name: "Digital VJTI",
    img: digital,
    head: "Anuj Chaudhari",
    info: "Digital VJTI is the golden string which woves all our jewels, our committees together."
  },
  {
    name: "E-Cell VJTI",
    img: ecell,
    head: "Amey Ahire",
    info: "E-Cell VJTI strives to be at the forefront by promoting entrepreneurship as a career, creating holistic and synergistic environment."
  }
];

function Comittees() {
  const userRole = localStorage.getItem("role");

  const  [committees,setCommittees] = useState([]);
  const [error, setError] = useState();

const [image, setImage] = useState();
  const [formData, setFormData] = useState({
    name: '',
    head: '',
    description: '',
    image: ''
  });
  const [isAddCommitteeOpen, setIsAddCommitteeOpen] = useState(false);
 
  useEffect(() => {
    fetch('http://localhost:4000/committees')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch committees');
            }
            return response.json();
        })
        .then(committees => {
            setCommittees(committees);
        })
        .catch(error => {
            console.error('Error fetching committees:', error);
        });
}, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const toggleAddCommittee = () => {
    setIsAddCommitteeOpen(!isAddCommitteeOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Send the form data to the backend
    try {
      let imageUrl = '';
  
      // Check if image is present in the form data
      if (formData.image) {
        const imageFormData = new FormData();
        imageFormData.append('file', formData.image);
        imageFormData.append('upload_preset', 'presetName');
  
        // Upload the image to your server
        const imageResponse = await fetch('yourImageUrl', {
          method: 'POST',
          body: imageFormData,
        });
  
        // Parse the response to get the image URL
        const imageData = await imageResponse.json();
        imageUrl = imageData.url;
      }
  
      // Add the image URL to the form data
      const submitData = {
        ...formData,
        image: imageUrl,
      };
  
      // Send the updated form data to your backend
      const response = await fetch('http://localhost:4000/add-committee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        // Reset form fields after successful submission if needed
        setIsAddCommitteeOpen(false);
        setFormData({
          name: '',
          head: '',
          description: '',
          image: '',
        });
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div>
      {/* <div className="committee-container" style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
       {committees.length > 0 && committees.map(committee => (
          <Cards event = {committee} />
        ))}
      </div> */}
<div className='mt-5'>
  {arr.reduce((rows, _, idx) => (idx % 4 === 0 ? rows.concat([arr.slice(idx, idx + 4)]) : rows), []).map((row, rowIndex) => (
    <div key={rowIndex} className="committee-row" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', marginLeft: '20px', marginRight: '20px'}}>
      {row.map(committee => (
        <Cards key={committee.name} head={committee.head} img={committee.img} name={committee.name} info={committee.info} style={{ margin: '0 5px', width: '3000px' }} />
      ))}
    </div>
  ))}
</div>

 
{(userRole === "Admin" || userRole === "Authority") && (

      <button className="button-19" onClick={toggleAddCommittee} style={{ width: '180px', marginBottom: '10px', marginLeft: '1250px' }}>Add Committee</button>
)}
      {isAddCommitteeOpen && (
        console.log(committees),
        <div className="add-committee-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Committee Name:</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

            <label htmlFor="head">Committee Head:</label>
            <input type="text" id="head" name="head" required value={formData.head} onChange={handleChange} />

            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" required value={formData.description} onChange={handleChange} />

            <label htmlFor="image">Firm Image:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />

            <button type="submit" className="btn btn-success float-end mb-2">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Comittees;
