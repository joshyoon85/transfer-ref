import { FadeLoader } from "react-spinners";

export default function LoadingSpinner() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <FadeLoader color="#59B4C3" />
    </div>
  );
}
