import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className=" z-[1] absolute top-[30%] left-[20%] flex flex-col items-center">
        <i class=" text-[3vh] text-[#116466] ri-home-4-line"></i>
        <div className="h-[300vh] w-[1px] bg-[#116466]"></div>
      </div>
      
      <div className=" fixed z-[9999] h-[10vh] w-full top">
        <Nav />
      </div>
      <Home />
      <About/>
      <Projects/>
    </>
  );
}

export default App;
