import React, { useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';

function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [filePreview, setFilePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [apiKey, setApiKey] = useState(''); // State variable for API key

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        if (file) {
            // Read and display a preview of the selected CSV file
            const reader = new FileReader();
            reader.onload = (e) => {
                setFilePreview(e.target.result);
            };
            reader.readAsText(file);
        } else {
            setFilePreview('');
        }
    };

    const handleApiKeyChange = (event) => {
        setApiKey(event.target.value);
    };

    const handleUpload = async (event) => {
        event.preventDefault();
        if (!selectedFile) {
            alert('Please select a file to upload');
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await axios.post('http://localhost:4000/upload-csv', formData, {
                responseType: 'blob',
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'api-key': apiKey, // Include the API key in the request headers
                },
            });

            const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            saveAs(blob, 'youtube-channels.docx');
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='flex items-center justify-center h-[100vh]'>
            <form onSubmit={handleUpload}>
                <input type="file" className='hidden' onChange={handleFileChange} accept=".csv" id='file' />
                <label
                    htmlFor="file"
                    className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-100 hover:text-white"
                >
                    {loading ? (
                        <div className="spinner-border text-primary" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        <p className='text-center'>{selectedFile?.name}</p>
                    )}
                    <span className="mt-2 text-base leading-normal">
                        {loading ? 'Uploading...' : 'Select a file'}
                    </span>
                </label>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Enter API Key"
                        value={apiKey}
                        onChange={handleApiKeyChange}
                        className="w-64 px-4 py-2 border rounded-md"
                    />
                </div>
                <button type="submit" disabled={loading} className='bg-[steelblue] text-white rounded-md p-[0.5rem] block my-[1rem] w-[200px] m-auto'>
                    Upload
                </button>
            </form>
        </div>
    );
}

export default FileUpload;
