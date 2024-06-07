import { useState } from "react";
import { Layout } from "@/components/Layout";
import { StepsLayout } from "@/components/StepsLayout";
import { TextInput } from "@/components/inputs/TextInput";
import { NavigationButtons } from "@/components/NavigationButtons";
import { useRouter } from 'next/router';

const ContactInformation = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to prevent multiple submissions
  const router = useRouter();

  const handleNext = () => {
    if (name && company && email) {
      setIsSubmitted(true); // Set the flag to true
      router.push('/data-spreedsheet');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <div className='flex flex-col gap-4'>
            <p className="flex items-center gap-4 text-black font-bold text-lg">Please provide us your contact information</p>
            <TextInput labelText='Name:' value={name} onChange={setName} />
            <TextInput labelText='Company:' value={company} onChange={setCompany} />
            <TextInput labelText='Email:' value={email} onChange={setEmail} />
          </div>
          <NavigationButtons back='/file-format' next='/data-spreedsheet' stepIsValidated={!isSubmitted} />
        </div>
      </StepsLayout>
    </Layout>
  );
};

export default ContactInformation;
