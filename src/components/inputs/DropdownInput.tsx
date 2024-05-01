import { useState } from "react";
import { Listbox } from "@headlessui/react";
import useFormStore from "@/store/form";

type DropdownInputProps = {
  question: string;
  data: {
    id: number;
    name: string;
  }[];
};

export const DropdownInput = ({ question, data }: DropdownInputProps) => {
  const { selectedDropdownElement, setSelectedDropdownElement } =
    useFormStore();

  // Initial state for selected dropdown element
  const defaultSelectedOption = { id: -1, name: "--select--" };
  const [selectedItem, setSelectedItem] = useState(defaultSelectedOption);

  return (
    <section className="flex flex-col gap-4 py-2">
      <p className="text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        {question}
      </p>
      <Listbox
        value={selectedItem}
        onChange={(value) => {
          setSelectedItem(value);
          setSelectedDropdownElement(value);
        }}
      >
        <Listbox.Button className="text-[18px] lg:text-[22px] border-2 rounded-lg p-2 border-zinc-100 text-black">
          {selectedItem.name}
        </Listbox.Button>

        <Listbox.Options className="flex flex-col gap-4">
          {data.map((i) => (
            <Listbox.Option
              key={i.id}
              value={i}
              className="bg-transparent border-2 rounded-lg p-2 text-[22px] text-black"
            >
              {i.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </section>
  );
};
