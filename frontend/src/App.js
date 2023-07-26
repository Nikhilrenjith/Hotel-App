import "./App.css";
import Homepage from "./components/Landing Page/Homepage";
import Login from "./components/Login pages/Login";
import Signup from "./components/Login pages/Signup";
import Location from "./components/Locations/All Locations";
import Rural from "./components/Locations/Rural";
import Urban from "./components/Locations/Urban";
import { Routes, Route } from "react-router-dom";
import Villa from "./components/Locations/Villa";
import Details from "./components/Individual Page/Details";
import SearchResults from "./components/Landing Page/SearchResults";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/rural" element={<Rural />} />
      <Route path="/urban" element={<Urban />} />
      <Route path="/villa" element={<Villa />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/search-results/:searchText" element={<SearchResults />} />
    </Routes>
  );
}

export default App;
