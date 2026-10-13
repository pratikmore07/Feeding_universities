import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Floating from "./components/Floating";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Outlet />

      <Footer />

      <Floating />
    </div>
  );
};

export default App;