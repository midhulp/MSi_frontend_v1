import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Employee } from "./pages/Employee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Employee />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
