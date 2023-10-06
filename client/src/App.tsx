import "./App.css";
import Dashboard from "./components/Dashboard";
import ProblemProvider from "./context/ProblemContext";

function App() {
  return (
    <div className="App">
      <ProblemProvider>
        <Dashboard />
      </ProblemProvider>
    </div>
  );
}

export default App;
