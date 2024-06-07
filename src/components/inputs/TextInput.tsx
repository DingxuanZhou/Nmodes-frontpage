import React from "react";

type TextInputProps = {
  labelText?: string;
  value: string;
  onChange: (value: string) => void;
};

export const TextInput = ({ labelText, value, onChange }: TextInputProps) => {
  return (
    <div className="mb-4 w-full">
      <label
        htmlFor='text'
        className='font-normal block mb-2'
      >
        {labelText}
      </label>
      <input 
        type='text'
        name='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent border-2 rounded-lg p-2 text-[22px] text-black w-full"
      />
    </div>
  );
};
