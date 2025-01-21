import { useScrollManagementRefresh } from "@hooks/useScrollManagementRefresh";
import Intro from "@components/Intro";
import Navbar from "@components/Navbar";
import Test from "@components/Test";
import Spacer from "@components/Spacer";
import Test2 from "@components/Test2";

function App() {
  useScrollManagementRefresh();
  return (
    <>
      <Navbar />
      <Intro />
      <Test />
      <Spacer />
      <Test2 />
    </>
  );
}

export default App;
