import { useState } from "react"

type TextInputProps = {
  labelText?: string
}

export const TextInput = ({ labelText }: TextInputProps) => {
  const [inputText, setInputText] = useState("")

  return (
    <>
      <label
        htmlFor='text'
        className='font-normal'
      >
        {labelText}
      </label>
      <input 
        type='text'
        name='text'
        placeholder={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="bg-transparent border-2 rounded-lg p-2 text-[22px] text-black"
      />
    </>
  )
}
