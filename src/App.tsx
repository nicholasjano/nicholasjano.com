import { useScrollManagementRefresh } from "@hooks/useScrollManagementRefresh";
import Intro from "@components/Intro";
import Navbar from "@components/Navbar";
import Stats from "@components/Stats";
import Spacer from "@components/Spacer";
import About from "@components/About";

function App() {
  useScrollManagementRefresh();
  return (
    <>
      <Navbar />
      <Intro />
      <Stats />
      <Spacer />
      <About />
    </>
  );
}

export default App;
