// import { useSearchParams } from "react-router-dom";

import Hero from "./Hero";
import Connector from "./Connector";
import Introduction from "./Introduction";
import Details from "./Details";

export default function Index() {
  // const [searchParams] = useSearchParams();
  // const nama = searchParams.get("nama");

  return (
    <div className="flex flex-col overflow-hidden">
      <Hero />
      <Connector />
      <Introduction />
      <Connector />
      <Details />
    </div>
  );
}
