import { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Dot } from "./icons/Dot";
import { VerticalLine } from "./icons/VerticalLine";

type StepTitleProps = {
  active: boolean;
  title: string;
};

type StepsLayoutProps = {
  children: ReactNode;
};

export const StepTitle = ({ active, title }: StepTitleProps) => {
  return (
    <h2
      className={`text-md lg:text-xl ${
        active
          ? "text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          : "text-black"
      }`}
    >
      {title}
    </h2>
  );
};

export const StepsLayout = ({ children }: StepsLayoutProps) => {
  const router = useRouter();

  const activeZero = router.pathname === "/workflow";
  const activeOne = router.pathname === "/file-format";
  const activeTwo = router.pathname === "/contact-information";
  const activeAnswers = router.pathname === "/data-spreedsheet";
  const activeSumary = router.pathname === "/summary";

  return (
    <article className="flex justify-center items-start lg:gap-60 w-full h-full bg-white -mt-10">
      <div className="flex flex-col px-16 py-6 border-r-2 border-[#8586887c] border-dashed h-full">
        {/* Additional text */}
        <p className="flex items-center gap-6 text-black font-bold text-2xl mb-10">
          Complete the following steps:
        </p>
        <div className="flex items-center gap-4">
          <Dot active />
          <StepTitle active={activeZero} title="Workflow" />
        </div>

        <VerticalLine active={activeOne || activeTwo || activeAnswers || activeSumary} />
        <div className="flex items-center gap-4">
          <Dot active={activeOne || activeTwo || activeAnswers || activeSumary} />
          <StepTitle active={activeOne} title="File Format" />
        </div>

        <VerticalLine active={activeTwo || activeAnswers || activeSumary} />
        <div className="flex items-center gap-4">
          <Dot active={activeTwo || activeAnswers || activeSumary} />
          <StepTitle active={activeTwo} title="Contact Information" />
        </div>

        <VerticalLine active={activeAnswers || activeSumary} />
        <div className="flex items-center gap-4">
          <Dot active={activeAnswers || activeSumary} />
          <StepTitle active={activeAnswers} title="Data Spreedsheet" />
        </div>
        <VerticalLine active={activeSumary} />
        <div className="flex items-center gap-4">
          <Dot active={activeSumary} />
          <StepTitle active={activeSumary} title="Summary" />
        </div>
      </div>
      <form className="ml-8">{children}</form>
    </article>
  );
};
