import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import "./css/Event.css"; // Import your custom CSS file

export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [venue, setVenue] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [conflictAlert, setConflictAlert] = useState(false);

    async function createNewPost(ev) {
        ev.preventDefault();

        // Check for conflicts before submitting the form
        // const conflictResponse = await fetch(`http://localhost:4000/checkConflict?venue=${venue}&date=${date}&time=${time}`);
        // const conflictData = await conflictResponse.json();

        // if (conflictData.conflict) {
        //     // Display alert if there is a conflict
           
        //     setConflictAlert(true);
        //     return;
        // }
        const data = new FormData();
        data.append('title', title);
    data.append('summary', summary);
    data.append('content', content);
    data.append('file', files[0]);
    data.append('venue', venue);
    data.append('date', new Date(`${date}T${time}`));

        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to={'/events'} />
    }

    return (
        <form onSubmit={createNewPost} className="create-post-form">
            <input type="text"
                className="input-field"
                placeholder="Title"
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
            <label htmlFor="venue">Venue:</label>
            <select
                id="venue"
                className="input-field"
                value={venue}
                onChange={ev => setVenue(ev.target.value)}
            >
                <option value="" disabled>Select a Venue</option>
                <option value="Quad">Quad</option>
                <option value="Auditorium">Auditorium</option>
                <option value="Football Ground">Football Ground</option>
                <option value="Cricket Ground">Cricket Ground</option>
                <option value="Seminar Hall">Seminar Hall</option>
                <option value="Main Gate">Main Gate</option>
            </select>

            <input type="date"
                className="input-field"
                placeholder="Date"
                value={date}
                onChange={ev => setDate(ev.target.value)} />
            <input type="time"
                className="input-field"
                placeholder="Time"
                value={time}
                onChange={ev => setTime(ev.target.value)} />

            {conflictAlert && <p style={{ color: 'red' }}>There is a conflict. Please choose a different venue, date, or time.</p>}

            <input type="text"
                className="input-field"
                placeholder="Summary"
                value={summary}
                onChange={ev => setSummary(ev.target.value)} />
            <input type="file"
                className="file-input"
                onChange={ev => setFiles(ev.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button className="submit-button ">Create Post</button>
        </form>
    );
}