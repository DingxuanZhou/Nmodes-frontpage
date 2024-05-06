import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import { NavigationButtons } from "@/components/NavigationButtons"
import { TextInput } from "@/components/inputs/TextInput"

const ContactInformation = () => {


  return (
    <Layout>
      <StepsLayout>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <div className='flex flex-col gap-8'>
          <p className="flex items-center gap-4 text-black font-bold text-lg">Please provide us your contact information</p>
          <TextInput labelText='Name:' />
          <TextInput labelText='Company:' />
          <TextInput labelText='Email:' />
          </div>
          <NavigationButtons back='/file-format' next='/data-spreedsheet' />
        </div>
      </StepsLayout>
    </Layout>
  )
}

export default ContactInformation
