import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { NavigationButtons } from "@/components/NavigationButtons";

const Dropzone = ({ setUploadedFilename }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle file drop event
  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      setIsLoading(true);

      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        // Replace the URL with your actual upload endpoint
        const response = await axios.post('https://investiflex.com/sov-insurance_api/upload', formData);

        if (response.status === 200) {
          setIsUploaded(true);
          setIsLoading(false);
          setUploadedFilename(selectedFile.name); // Set the uploaded filename
        } else {
          setIsLoading(false);
          setErrorMessage('Upload failed. Please try again.');
        }
      } catch (error) {
        setIsLoading(false);
        console.error('Error uploading file:', error);
        setErrorMessage('Error uploading file. Please try again.');
      }
    } else {
      setErrorMessage('Please select a file.');
    }
  };

  // Handle navigation to the next page
  const handleNextClick = () => {
    console.log('Selected file name:', selectedFile.name)
    if (selectedFile) {
      console.log('Selected file name:', selectedFile.name); // Add console.log here
      router.push({
        pathname: '/summary',
        query: { uploadedFilename: selectedFile.name }, // Pass the filename here
      });
    } else {
      console.error('No selected file available.');
    }
  };

  // Initialize dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <div className="file-drop-container">
          <p className="file-drop-text">Drag & drop files here, or click to select files</p>
        </div>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
      {isUploaded && (
        <NavigationButtons back='/contact-information' next='/summary' handleNextClick={handleNextClick} />
      )}
      {isLoading && (
        <p style={{ color: 'blue' }}>Processing...</p>
      )}
      {errorMessage && (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      )}
      {selectedFile && !isUploaded && !isLoading && !errorMessage && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <p>File size: {selectedFile.size} bytes</p>
        </div>
      )}

      {/* CSS Styles for the squared dashed window */}
      <style jsx>{`
        .file-drop-container {
          border: 2px dashed #ccc;
          width: calc(100% - 40px); /* Subtracting the margin from the total width */
          height: 200px; /* Adjust height as needed */
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 10px;
        }

        .file-drop-text {
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Dropzone;
