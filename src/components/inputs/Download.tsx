import React from 'react';
import axios from 'axios';

const Download = ({ uploadedFilename }) => {
  const handleDownload = async () => {
    if (uploadedFilename) {
      try {
        const response = await axios.get(`https://investiflex.com/sov-insurance_api/download/${uploadedFilename}`, {
          responseType: 'blob',
        });

        const blobUrl = URL.createObjectURL(new Blob([response.data]));
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = uploadedFilename;
        document.body.appendChild(a); // Append the anchor element to the DOM
        a.click();
        document.body.removeChild(a); // Remove the anchor element after download
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Error downloading file:', error);
      }
    } else {
      console.error('No uploaded filename available.');
    }
  };

  return (
    <div>
      {uploadedFilename && (
        <div>
          <p>File Name: {uploadedFilename}</p>
          <button onClick={handleDownload}>Download</button>
        </div>
      )}
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Download;
