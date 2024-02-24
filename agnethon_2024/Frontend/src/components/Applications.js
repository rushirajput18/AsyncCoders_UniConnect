
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Applications.css"; // Import CSS file

const Applications = () => {
  const [details, setDetails] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState(""); //to change status in backend
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [selectedrow, setSelectedrow] = useState({
    committeeName: "",
    committeeSecretory: "",
    eventDate: "",
    eventTime: "",
    contactNumber: "",
    message: "",
    email: "",
    venue: "",
    status:""
  });
  const [showCard, setShowCard] = useState(false);
  const handleUpdateStatusClick = (detail) => {
    //when clicked on update button
    setShowCard(true);
    setSelectedrow(detail);
    setSelectedStudentId(detail._id);
    console.log(detail._id);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/applications")
      .then((response) => setDetails(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const formatDate = (dateString) => {
    const dateObject = new Date(dateString);
    return dateObject.toISOString().split("T")[0];
  };
  const handleUpdateStatus = async () => {
    try {
      await axios.put(
        `http://localhost:4000/update/${selectedStudentId}`,
        { status: selectedStatus }
      );
      // Refresh the data after updating status
      // axios.get("http://localhost:5000/api/admission/fetchallstudents")
      //     .then((response) => setDetails(response.data))
      //     .catch((error) => console.error(error));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  

  return (
    <div style={{ marginTop: "20px", marginLeft: "10px" }}>
      <h2>Applications For Events</h2>
     
      <table
        className="table table-dark table-striped container"
        style={{ width: "100%", height: "50%", float: "left" }} // Adjusted width
      >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Committee</th>
            <th scope="col">Secretory</th>
            <th scope="col">Email</th>
            <th scope="col">Event Date</th>
            <th scope="col">Event Time</th>
            <th scope="col">Contact Number</th>
            <th scope="col">Venue</th>
            <th scope="col">Current Status</th>
            <th scope="col">Update Status</th>
          </tr>
        </thead>
        {details.map((detail, index) => (
          <tbody key={detail._id}>
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{detail.committeeName}</td>
              <td>{detail.committeeSecretory}</td>
              <td>{detail.email}</td>
              <td>{formatDate(detail.eventDate)}</td>
              <td>{detail.eventTime}</td>
              <td>{detail.contactNumber}</td>
              <td>{detail.venue}</td>
              <td>{detail.status}</td> 

              <td>
                <button style={{ width: '131px'}} onClick={() => handleUpdateStatusClick(detail)}>
                  Update Status
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
  
      {showCard && (
        <div className="card mt-4" style={{ width: "400px", margin: "0 auto" }}>
          <div className="card-body">
            <h5 className="card-title">
              Update Allotment Status of {selectedrow.fullName}
            </h5>
  
            <form
              className="container"
              style={{ paddingBottom: "4rem" }}
              onSubmit={handleUpdateStatus}
            >
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  id="Alloted"
                  value="Alloted"
                  onChange={() => handleStatusChange("Alloted")}
                  className="form-check-input"
                />
                <label htmlFor="Alloted" className="form-check-label">
                  Alloted
                </label>
              </div>
  
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  id="Waitlisted"
                  value="Waitlisted"
                  onChange={() => handleStatusChange("Waitlisted")}
                  className="form-check-input"
                />
                <label htmlFor="Waitlisted" className="form-check-label">
                  Waitlisted
                </label>
              </div>
  
              <div className="form-check">
                <input
                  type="radio"
                  name="status"
                  id="Rejected"
                  value="Rejected"
                  onChange={() => handleStatusChange("Rejected")}
                  className="form-check-input"
                />
                <label htmlFor="Rejected" className="form-check-label">
                  Rejected
                </label>
              </div>
  
              <button
                type="submit"
                style={{ cursor: "pointer" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
      }  

export default Applications;
