// data-spreed.tsx
import React, { useState } from 'react';
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";
import Dropzone from "@/components/inputs/Dropzone"; // Adjust the path if needed

const DataSpreedsheet = () => {
  const [uploadedFilename, setUploadedFilename] = useState('');

  
  return (
    <Layout>
      <StepsLayout>
      <p className="flex items-center gap-4 text-black font-bold text-lg">Please upload your data spreadsheet:</p>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <Dropzone setUploadedFilename={setUploadedFilename} />
        </div>
      </StepsLayout>
    </Layout>
  );
};

export default DataSpreedsheet;
