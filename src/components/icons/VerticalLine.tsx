type VerticalLineProps = {
  active: boolean
}

export const VerticalLine = ({ active }: VerticalLineProps) => {
  return (
    <div
      className={`w-[4px] h-[30px] ml-2 rounded ${
        active 
        ? "bg-black" : "bg-black opacity-25 hover:opacity-40"
      } `}
    ></div>
  )
}
