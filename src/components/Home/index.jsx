import Hero from "./Hero";
import Connector from "./Connector";
import Introduction from "./Introduction";
import Details from "./Details";

export default function Index() {
  return (
    <div className="flex w-full flex-col text-green">
      <Hero />
      <Connector />
      <Introduction />
      <Details />
    </div>
  );
}
