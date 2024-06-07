import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useRouter } from 'next/router'; // Import the useRouter hook
import { NavigationButtons } from "@/components/NavigationButtons";

type DropzoneProps = {
  setUploadedFilename: (filename: string) => void;
  handleNavigateToSummary: (filename: string, result: string) => void;
};

const Dropzone = ({ setUploadedFilename, handleNavigateToSummary }: DropzoneProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter(); // Initialize useRouter

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (selectedFile) {
      setIsLoading(true);

      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('https://investiflex.com/sov-insurance_api/upload', formData);

        if (response.status === 200) {
          setIsUploaded(true);
          setIsLoading(false);
          setUploadedFilename(selectedFile.name); // Set the uploaded filename
          // In Dropzone component
          
          handleNavigateToSummary(selectedFile.name, response.data);


          // Navigate to the summary page using Next.js router with response data
          handleNavigateToSummary(selectedFile.name, response.data);
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

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <div className="file-drop-container">
          <p className="file-drop-text">Drag & drop files here, or click to select files</p>
        </div>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleSubmit}>
        Submit
      </button>
      {isUploaded && (
        
        <NavigationButtons back='/contact-information' next='/summary' />
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
