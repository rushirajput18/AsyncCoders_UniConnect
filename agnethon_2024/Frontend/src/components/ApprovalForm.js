import React, { useState } from 'react';
import './css/Form.css'; // Import the CSS file for styling

const ApprovalForm = () => {
  // State variables to hold form data
  const [formData, setFormData] = useState({
    committeeName: '',
    committeeSecretory: '',
    contactNumber: '',
    email: '',
    eventDate: '',
    eventTime: '',
    venue: '',
    message: ''
  });

  // Function to handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send the form data to the backend
    try {
      const response = await fetch('http://localhost:4000/event-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        // Reset form fields after successful submission if needed
        setFormData({
          committeeName: '',
          committeeSecretory: '',
          contactNumber: '',
          email: '',
          eventDate: '',
          eventTime: '',
          venue: '',
          message: ''
        });
      } else {
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border p-4 shadow bg-light">
          <div className="col-12">
            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4">Event Permission Form</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              {/* Input fields for the form */}
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Committee Name"
                  name="committeeName"
                  value={formData.committeeName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Committee Secretary"
                  name="committeeSecretory"
                  value={formData.committeeSecretory}
                  onChange={handleChange}
                />
              </div>
              <div class="col-md-6">
                        <input type="tel" class="form-control" name="contactNumber" placeholder="Contact Number"  value={formData.contactNumber}
                  onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                        <input type="email" class="form-control" name="email" placeholder="Enter Email" value={formData.email}
                  onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                        <input type="date" class="form-control" name='eventDate' placeholder="Enter Event Date" value={formData.eventDate}
                  onChange={handleChange}/>
                    </div>
                    <div class="col-md-6">
                        <input type="text" class="form-control" name='eventTime' placeholder="Time" value={formData.eventTime}
                  onChange={handleChange}/>
                    </div>
                    <div class="col-12">
                        <select class="form-select"
                        value={formData.venue}
                        name='venue'
                        onChange={handleChange}>
                            <option selected>Venue</option>
                            <option value="Quad">Quad</option>
                            <option value="Audi">Audi</option>
                            <option value="Football Ground">Football Ground</option>
                            <option value="Seminar Hall">Seminar Hall</option>
                        </select>
                    </div>
                    <div class="col-12">
                        <textarea class="form-control" name='message' placeholder="Message" value={formData.message}
                  onChange={handleChange}></textarea>
                    </div>
              {/* Add other input fields similarly */}
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-success float-end mb-2">Submit</button>
                <button type="button" className="btn btn-outline-secondary float-end">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApprovalForm;
