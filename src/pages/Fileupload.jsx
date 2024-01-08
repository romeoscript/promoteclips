import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:4000/upload-csv', formData, {
                responseType: 'blob', // Important to handle binary data
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Use file-saver to save the file
            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            saveAs(blob, "youtube-channels.docx");
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} accept=".csv" />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default FileUpload;
