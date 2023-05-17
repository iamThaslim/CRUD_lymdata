import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Create from "./pages/Create";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="home" element={<Home />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;
