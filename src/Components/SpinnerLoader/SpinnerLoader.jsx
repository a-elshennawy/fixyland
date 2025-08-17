import { PuffLoader } from "react-spinners";

export default function SpinnerLoader() {
  return (
    <>
      <div className="Loader">
        <PuffLoader color="#448c74" speedMultiplier={1} />
      </div>
    </>
  );
}
