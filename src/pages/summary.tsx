// Import the necessary components and hooks
import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import Download from '@/components/inputs/Download'; // Adjust the import path as per your project structure
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const SummaryPage = () => {
  // Initialize state to store the uploaded filename
  const [uploadedFilename, setUploadedFilename] = useState('');

  // Get the filename from the router query on component mount
  const router = useRouter();
  useEffect(() => {
    const { uploadedFilename } = router.query;
    console.log('uploadedFilename:', uploadedFilename); // Log the filename
    if (uploadedFilename) {
      setUploadedFilename(uploadedFilename);
    }
  }, [router.query]);

  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
        <p className="flex items-center gap-4 text-black font-bold text-lg">Summary</p>
          <p>Download the summary we generate of your business</p>
          {/* Pass the uploadedFilename as a prop to the Download component */}
          <Download uploadedFilename={uploadedFilename} />
        </div>
      </StepsLayout>
    </Layout>
  );
};

export default SummaryPage;
