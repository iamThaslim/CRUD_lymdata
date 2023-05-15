import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Signin from "./pages/Signin";
import Home from "./pages/Home";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
