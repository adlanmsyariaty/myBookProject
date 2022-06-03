import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="pt-[10px] pb-[10px] flex justify-center fixed w-[100%] top-0 z-10">
        <Nav />
      </div>
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="wishlist" element={<Wishlist />}/>
      </Routes>
    </div>
  );
}

export default App;
