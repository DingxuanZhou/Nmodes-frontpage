import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";
import Dropzone from "@/components/inputs/Dropzone"; // Adjust the path if needed
import { useRouter } from 'next/router';

const DataSpreedsheet = () => {
  const [uploadedFilename, setUploadedFilename] = useState('');
  const router = useRouter();

  // Function to handle navigation to SummaryPage
  const handleNavigateToSummary = (filename: string, result: { status: { MESSAGE: string; RESPONSE: string }[] }) => {
    if (filename) {
      // Check if result.status is an array before processing
      if (Array.isArray(result.status)) {
        // Map over the array and concatenate MESSAGE and RESPONSE for each object
        const resultString = result.status.map(item => `${item.MESSAGE}: ${item.RESPONSE}`).join('\n');
        console.log('Navigating to summary with:', filename, resultString);
        router.push({
          pathname: '/summary',
          query: { uploadedFilename: filename, uploadResult: JSON.stringify(result) }, // Convert result to JSON string
        });
        
      } else {
        console.error('Invalid result format: status is not an array.');
      }
    } else {
      console.error('No uploaded filename available.');
    }
  };

  return (
    <Layout>
      <StepsLayout>
        <p className="flex items-center gap-4 text-black font-bold text-lg">Please upload your data spreadsheet:</p>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          {/* Pass setUploadedFilename and handleNavigateToSummary to Dropzone */}
          <Dropzone setUploadedFilename={setUploadedFilename} handleNavigateToSummary={handleNavigateToSummary} />
        </div>
      </StepsLayout>
    </Layout>
  );
};

export default DataSpreedsheet;
