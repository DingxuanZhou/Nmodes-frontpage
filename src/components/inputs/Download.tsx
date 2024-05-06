import React from 'react';
import axios from 'axios';

type DownloadProps = {
  uploadedFilename: string;
};

const Download = ({ uploadedFilename }: DownloadProps) => {
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
        a.click();
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={handleDownload}>Download</button>
    </div>
  );
};

export default Download;
