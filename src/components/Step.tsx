import { ReactNode } from "react";
import { NavigationButtons } from "./NavigationButtons";

type StepProps = {
  children: ReactNode;
  back: string;
  next: string;
};

export const Step = ({ children, back, next }: StepProps) => {
  return (
    <div className="flex flex-col justify-between min-w-[500px] min-h-[200px]">
      {children}
      <NavigationButtons back={back} next={next} />
    </div>
  );
};
