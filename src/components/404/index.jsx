import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";

export default function Section404() {
  return (
    <div className="flex min-h-screen flex-grow flex-col items-center justify-center gap-6 p-8 text-black sm:flex-row">
      <FontAwesomeIcon icon={faFrown} className=" h-36 text-red sm:h-48" />
      <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
        <h1 className="mb-2 font-display text-8xl font-bold text-red">404</h1>
        <p className="font-display text-xl">Halaman tidak ditemukan!</p>
      </div>
    </div>
  );
}
