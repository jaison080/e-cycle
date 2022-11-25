import { Navbar } from "../components";
import Landing from "../components/Landing/Landing";
import CustomTitle from "../utils/customTitle";

export default function Home() {
  return (
    <>
      <CustomTitle title="Home" />
      <Landing/>
    </>
  );
}
