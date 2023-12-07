import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from "./file-upload";
import FileUploadForm from "./file-upload-form/file-upload-form";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile, selectedFile.name);

    axios.post("http://localhost:8080/upload", formData)
        .then((response) => {
          console.log('File uploaded successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error uploading file:', error);
        });
  };

  return (
      <div>
        <h2>File Upload using React</h2>
        <div>
          <input type="file" onChange={onFileChange} />
          <button onClick={onFileUpload}>
            Upload!
          </button>
        </div>
          <FileUploadForm></FileUploadForm>
      </div>
  );
}

export default App;