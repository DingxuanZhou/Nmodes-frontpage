import Link from "next/link";

type NavigationButtonsProps = {
  back: string;
  next: string;
  submit?: boolean; // Added submit prop
  stepIsValidated?: boolean;
};

export const NavigationButtons = ({
  back,
  next,
  submit,
  stepIsValidated = true,
}: NavigationButtonsProps) => {
  return (
    <div className="absolute bottom-[100px] flex gap-80">
      <Link href={back}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Back
        </button>
      </Link>
      {submit ? (
        // Render the Submit button if submit prop is true
        <button
          type="submit"
          disabled={!stepIsValidated}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        >
          Submit
        </button>
      ) : (
        <Link href={next}>
          <button
            disabled={!stepIsValidated}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          >
            Next
          </button>
        </Link>
      )}
    </div>
  );
};
