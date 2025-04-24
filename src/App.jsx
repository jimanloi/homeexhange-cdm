import { useEffect, useState } from "react";
import "./App.css";
import Intro from "./components/Intro";
import WelcomeAnimation from "./components/WelcomeAnimation";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <WelcomeAnimation />
      ) : (
        <>
          <WelcomeAnimation showModalOnly />
          <Intro />
          <MainContent />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
