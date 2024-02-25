import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'
import { Navigate } from "react-router-dom";
import Editor from "../Editor";
import "./css/Event.css"; // Import your custom CSS file

export default function CreatePost(){
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState(''); 
    const [files,setFiles]= useState('');
    const [redirect,setRedirect] = useState(false);

    async function createNewPost(ev){
        const data =  new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post',{
            method: 'POST',
            body: data,
            credentials:'include',
        });
        if(response.ok){
          setRedirect(true);
        }
    }
    if(redirect){
      return <Navigate to={'/events'}/>
    }
  
    return (
        <form onSubmit={createNewPost} className="create-post-form">
            <input type="text" 
                   className="input-field"
                   placeholder="Title"
                   value={title}
                   onChange={ev => setTitle(ev.target.value)}/>
            <input type="text" 
                   className="input-field"
                   placeholder="Summary"
                   value={summary}
                   onChange={ev => setSummary(ev.target.value)}/>
            <input type="file" 
                   className="file-input"
                   onChange={ev => setFiles(ev.target.files)}/>
           <Editor value={content} onChange={setContent}/>
            <button className="submit-button ">Create Post</button>
        </form>
    );
}
