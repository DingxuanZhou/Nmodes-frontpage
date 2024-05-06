import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";
import Dropzone from "@/components/inputs/Dropzone"; // Adjust the path if needed
import { useRouter } from 'next/router';

const DataSpreedsheet = () => {
  const [uploadedFilename, setUploadedFilename] = useState('');
  const router = useRouter();

  // Function to handle navigation to SummaryPage
  const handleNavigateToSummary = () => {
    if (uploadedFilename) {
      router.push({
        pathname: '/summary',
        query: { uploadedFilename: uploadedFilename }
      });
    } else {
      console.error('No uploaded filename available.');
    }
  };


  return (
    <Layout>
      <StepsLayout>
        <p className="flex items-center gap-4 text-black font-bold text-lg">Please upload your data spreadsheet:</p>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          {/* Pass setUploadedFilename to Dropzone */}
          <Dropzone setUploadedFilename={setUploadedFilename} />
        </div>
      </StepsLayout>
    </Layout>
  );
};

export default DataSpreedsheet;
