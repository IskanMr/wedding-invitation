import { useSearchParams } from "react-router-dom";

export default function Index() {
  const [searchParams] = useSearchParams();
  const nama = searchParams.get("nama");

  return (
    <div className=" overflow-hidden">
      <>This is {nama}</>
    </div>
  );
}
