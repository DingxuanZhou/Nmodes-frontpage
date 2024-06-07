import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import { Step } from "@/components/Step"
import { DropdownInput } from "@/components/inputs/DropdownInput"

const format = [
  { id: 1, name: "PDF" },
  { id: 2, name: "CSV" },
  { id: 3, name: "EXCEL(XLSX)" },
  { id: 4, name: "WORD" },
]

const FileFormat = () => {
  return (
    <Layout>
      <StepsLayout>
        <Step back='/' next='/contact-information'>
          <div className='flex flex-col gap-4'>
            
            <DropdownInput
              question='Please choose a standard file format:'
              data={format}
            />
          </div>
        </Step>
      </StepsLayout>
    </Layout>
  )
}

export default FileFormat
