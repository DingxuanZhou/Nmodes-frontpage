import React, { useEffect, useState } from 'react';
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";
import Download from '@/components/inputs/Download'; // Adjust the import path as per your project structure
import { useRouter } from 'next/router';

type UploadResultItem = {
  MESSAGE: string;
  RESPONSE: string;
};

const SummaryPage = () => {
  const [uploadedFilename, setUploadedFilename] = useState('');
  const [uploadResult, setUploadResult] = useState<UploadResultItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const { uploadedFilename, uploadResult } = router.query;
    console.log('Received query parameters:', { uploadedFilename, uploadResult });

    if (uploadedFilename) {
      setUploadedFilename(uploadedFilename as string);
    } else {
      console.error('No uploaded filename available.');
    }

    if (uploadResult) {
      try {
        const parsedResult = JSON.parse(uploadResult as string);
        setUploadResult(parsedResult.status); 
      } catch (error) {
        console.error('Error parsing uploadResult:', error);
      }
    }
  }, [router.query]);

  const renderContent = () => {
    if (uploadedFilename.endsWith('.doc')) {
      return (
        <div>
          <p className="text-black font-bold text-lg">Word Document Content:</p>
          {uploadResult.map((item, index) => (
            <div key={index} className="mb-4">
              <p className="font-bold">MESSAGE:</p>
              <p>{item.MESSAGE}</p>
              <p className="font-bold mt-2">RESPONSE:</p>
              <p>{item.RESPONSE}</p>
            </div>
          ))}
        </div>
      );
    } else if (uploadedFilename.endsWith('.xlsx')) {
      return (
        <div>
          <p>Download the summary we generate of your business</p>
          <Download uploadedFilename={uploadedFilename} />
        </div>
      );
    } else {
      return <p>Unsupported file type</p>;
    }
  };

  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <p className="flex items-center gap-4 text-black font-bold text-lg">Summary</p>
          {renderContent()}
        </div>
      </StepsLayout>
    </Layout>
  );
};

export default SummaryPage;
