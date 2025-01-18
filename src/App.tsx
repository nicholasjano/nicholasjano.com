import { useScrollManagementRefresh } from "@hooks/useScrollManagementRefresh";
import Intro from "@components/Intro";
import Navbar from "@components/Navbar";
import Test from "@components/Test";

function App() {
  useScrollManagementRefresh();
  return (
    <>
      <Navbar />
      <Intro />
      <Test />
    </>
  );
}

export default App;
