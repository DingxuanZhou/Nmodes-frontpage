import { Layout } from "@/components/Layout"
import { StepsLayout } from "@/components/StepsLayout"
import { Step } from "@/components/Step"
import { DropdownInput } from "@/components/inputs/DropdownInput"

const format = [
  { id: 1, name: "List of Liabilities" },
  { id: 2, name: "Location" },
  { id: 3, name: "SOV Standard" },
]

const Workflow = () => {
  return (
    <Layout>
      <StepsLayout>
        <Step back='/' next='/file-format'>
        <div className='flex flex-col justify-between min-w-[500px] min-h-[200px]'>
          <DropdownInput
              question='Choose your workflow:'
              data={format}
            />
        </div>
        </Step>
      </StepsLayout>
    </Layout>
  )
}

export default Workflow
