import Navbar from "./components/Navbar";
import SKUManagement from './components/SKUManagement'
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <SKUManagement />

      {/* <div style={{ padding: "20px", color: "white" }}>
        <h1>Navbar Loaded Successfully ✔</h1>
        <p>Your custom navbar is now visible above.</p>
      </div> */}
    </div>
  );
}

export default App;
