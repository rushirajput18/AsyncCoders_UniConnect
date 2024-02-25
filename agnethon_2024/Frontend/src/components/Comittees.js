import React, { useState, useEffect } from 'react';
import './css/Comittees.css';
import Cards from './Cards';
import './css/Button.css';

function Comittees() {
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
      <div className="committee-container" style={{ marginLeft: '20px', marginRight: '20px', marginBottom: '20px' }}>
       {committees.length > 0 && committees.map(committee => (
          <Cards event = {committee} />
        ))}
      </div>
      

      <button className="button-19" onClick={toggleAddCommittee} style={{ width: '180px', marginTop: '10px', marginLeft: '1250px' }}>Add Committee</button>

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
