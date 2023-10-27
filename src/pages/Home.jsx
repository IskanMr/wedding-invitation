import { HtmlHead } from "../components/HtmlHead";
import Beranda from "../components/Home";
import Cover from "../components/cover";

export default function Home() {
  return (
    <>
      <HtmlHead
        title="Beranda"
        decription="[insert page description]"
        link="/"
      />
      <Cover />
      <Beranda />
    </>
  );
}
