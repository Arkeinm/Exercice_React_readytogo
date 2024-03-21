import { useState } from "react";
import "./App.css";
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);
  return (
    <>
      <Header />
      <Content
        switch1={switch1}
        setSwitch1={setSwitch1}
        switch2={switch2}
        setSwitch2={setSwitch2}
        switch3={switch3}
        setSwitch3={setSwitch3}
      />
      <Footer />
    </>
  );
}

export default App;
